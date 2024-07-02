# JourneyJoy

This is a tourist website. Users can add tourism destinations based on region. Users may manage their tourism attractions properly.

Live Site: [https://tourism-website-client.vercel.app](https://tourism-website-client.vercel.app/)

## Features and Characteristics:

- Plan personalized travel itineraries based on preferences, budget, and travel dates.
- Secure user authentication and authorization system
- Easily book flights, hotels, tours, and activities directly on our website.

## Technology uses

- React
- Express
- MongoDB

## How to run this project in your local machine

1. clone this project in your local machine
```
git@github.com:omor777/tourism-website-client.git
```
2. install dependencies
```
npm install
```
3. create firebase project

4. replace this with your firebase config
```
// ./src/firebase/firebase.config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

```
5. run project
```
npm run dev
```

