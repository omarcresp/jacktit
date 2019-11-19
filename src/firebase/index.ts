import '@firebase/firestore';

import firebase, { auth } from 'firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase';

const {
  REACT_APP_FB_API_KEY,
  REACT_APP_FB_AUTH_DOMAIN,
  REACT_APP_FB_DATABASE_URL,
} = process.env;

const myFirebaseApp = firebase.initializeApp({
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: REACT_APP_FB_DATABASE_URL,
});

export const rsf = new ReduxSagaFirebase(myFirebaseApp);
export const authProvider = new auth.GoogleAuthProvider();
