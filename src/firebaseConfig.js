import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAN8SJNq9mYhH6ae6zdQAlw_wIy_mXJWeI',
  authDomain: 'vite-admin.firebaseapp.com',
  databaseURL: 'https://vite-admin-default-rtdb.firebaseio.com',
  projectId: 'vite-admin',
  storageBucket: 'vite-admin.appspot.com',
  messagingSenderId: '488598933880',
  appId: '1:488598933880:web:8d44f9b08346789556788d',
  measurementId: 'G-E9EQNNG5GV',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
