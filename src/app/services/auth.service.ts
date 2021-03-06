import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser;

  constructor(private db: DatabaseService, private afdb: AngularFireDatabase, public afAuth: AngularFireAuth) { 
    
  }

  createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      return console.log(errorCode, errorMessage);
    }).then(() => {
      /* Waits for the creation to resolve, then creates the user with the getUser method in this same service */
      console.log('Creating user in database:', email, password);
      this.getUser();
      return;
    })
    return;
  }

  signIn(email, password) {
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        console.error(errorMessage);
      }
      console.log(error);
    });
  }//Sign in ends here

  getCurrentUser(user){
    // console.log(user);
    let currentUser;
    currentUser = {id: user.uid, name: user.email, email: user.email};
    // console.log(currentUser);
    return  currentUser;
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  /* Figuring out a better method for getting the currentUser Source: https://angularfirebase.com/snippets/check-if-current-user-exists-with-angularfire/ */
  
  async getUser() {
    const user = await this.isLoggedIn()
    if (user) {
      this.currentUser = user;
      console.log(this.currentUser);
      const creationDate = new Date();
      /* Takes user data, when available, and creates User object based off of it */
      this.db.createUserData(user.email, user.uid, creationDate);
      return this.currentUser;
    } else {
      console.log('User not found')
      return;
    }
  }

  signOut() {
    /*Signing user out, need to find a way to monitor the state so the form changes back to the signed out format */
    firebase.auth().signOut();
    console.log('You are now signed out!');
  }

}
