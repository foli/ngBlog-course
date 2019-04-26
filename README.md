# ngBlog :metal:

This repo contains the exercise files for the course [Up and Running with Angular, Ionic and Firebase](https://www.udemy.com/up-and-running-with-angular-ionic-and-firebase/?couponCode=GITHUB)

## How to use the exercise files

### List all branches

```bash
git branch -a
```

### Navigate between lectures

```bash
git checkout name-of-the-lecture
```

## How to use the application

### Add your Firebase API keys

```
// environments.ts

export const environment = {
    ...
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
};
```

### Install dependencies

```bash
npm install
```

### View on browser

```bash
npm run start
```

### Deploy to firebase

```bash
npm run deploy
```

## Course Overview

1. Introduction

   1. Welcome

2. Development Environment

  1. Setting up \*nix (mac/linux)
  2. Setting up Windows

3. Getting started

  1. Bootstrapping our application
  2. Blog List/Detail
  3. User Profile Page
  4. User Update Modal
  5. App Tabs - admin and editor area
  6. Theming Ionic apps

4. Setting up Firebase

  1. Getting started with Firebase
  2. Firebase configuration and angularfire
  3. Setting up environments and deployments | Deploying to firebase hosting

5. Authentication

  1. OAuth logins
  2. Magic links - passwordless
  3. Shared module - why and benefits
  4. Creating User accounts with Cloud functions

6. Making it a PWA

  1. Add Angular PWA
  2. App manifest - colors and metatags
  3. App icons
  4. Notify about updates
  5. Lighthouse tool

7. Adding features | comming soon

  1. Add post to bookmarks with count | Data aggregation
  2. Listing bookmars
  3. Adding comments with count | Data aggregation
  4. Up/down voting comments
  5. Managing comments - admin and editor
  6. Managing user accounts - admin
  7. User feed - for posts by followed
  8. Follow/Unfollow users
  9. Notifications | new followers/post
  10. Pagination | post list pages
  11. Setting up Google Analytics

8. Updates && Help

  1. Updating the application
  2. Where to find help

9. Conclusion

  1. What to learn next
  2. Good bye
