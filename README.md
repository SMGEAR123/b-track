# Legislation Tracker
Search for legislation using the [Legiscan API](https://legiscan.com/legiscan) and add them to a collection to keep track of them!

__Note:__ Instructions for using the application can be found at the bottom of of this document. You can also access them with this [link](#instructions)!

## Main Features:
1. Users should be able to search for specific state legislation
2. Users should be able to collect legislation in a list
3. Users should be able to check for updates on collected Legislation

## Technology
This project was made using the following technologies:
* Angular 6 - Front-end framework
* Bootstrap - For styles and responsiveness
* Firebase - Cloud FireStore: database and useraAuthentication
* [Legiscan API](https://legiscan.com/legiscan) - For retrieving legislation information

## Project Summary
This was a project to test an the API for a website I use for my work. Rather than subscribing to the service, I wanted to see if I could make a single page application that would let a user view all the legislation they're following in one place, rather than navigating to each page page individually for updated information.

## Post-project Summary
The project does what I'd hoped and lets you collect legislation and any information you may need from it. This was just to get an idea of what information can be retrieved from the API. Unfortunately, the process for finding codes for legislation across states takes some time. But with some initial setup, this could be save a lot of time in gathering that kind of information.

### Lessons Learned
* __Handling HTTP requests and using that to capture the information you need can be really handy!__ Make sure to test the API to see if it has the kind of information you need before you start planning around it!

* __Getting familiar with an APIs documentation can be pretty tough!__ You should take some time to read through the documentation and get a general idea of what you can do! Sometimes you have to be a bit creative if the methods you find aren't exactly what you need. Learning how to combine the queries can be challenging but it's defintely worth it if you think you're close!

* __Working with API keys!__ I've used a few other APIs that require keys and it can take some time to get them. That's the perfect time to make more plans for what you're building and checking if other APIs are available.

* __The importance of initial setup.__ I think it should be easy for users to get started with an application. For this project, retrieving codes for each unique bill would require knowledge of the API and some digging to find what you need. For my next application, I want to make something that's easier for users to work with and wouldn't require too much knowledge for them to get started.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instructions: 
This project is currently hosted on Firebase! You can access the project with the link in the description or visit it [here](https://project-host-test-1c4bb.firebaseapp.com/submit).

You can use the Bill Search view, the navigation item in the menu bar at the top, to start searching for legislation, but you'll have to sign in or create an account to use the collecting and tracking features.

Here's a list of identification numbers you can use to retrieve information on prior legislation with the search view:\
__ID:__ 789\
__ID:__ 794\
__ID:__ 264

In the Legislation Search view, under Bill Search, enter in one of the IDs above and it's information will be displayed below. You can add an optional category if it covers a specific topic you're interested in. Once you're finished, click the "Add to Collection" button.

As of right now, the test account already has two bills added to the user's collection so you'll see these bills in addition to any that you add to your collection through the search.

In the list view, you'll see each of the bills you've added to your collection with information such as the description, state, category, and action history showing where it is in the legislative process for that state!

Clicking the light blue "Edit Bill" button to the right of the Last Action will allow you to edit the Category, Action, and Action Date. 

Below the Action History list, you'll see three buttons. Here's a description of what they do:
* Update Bill: Once you've checked the status, if an update is available, you can apply that update to the listed bill and the some of the data will change.
* Check Status: Check if updates are available for the selected bill. You can change the status using the "Edit Bill" button next to last action to test this with a small change.
* Delete: Delete the bill from the collection.
