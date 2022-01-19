import React from 'react';
import{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXhaZsAHTddeN9O8aRn0vZ21o6pLT-Ze4",
  authDomain: "coderhouse-22f3a.firebaseapp.com",
  projectId: "coderhouse-22f3a",
  storageBucket: "coderhouse-22f3a.appspot.com",
  messagingSenderId: "256617869238",
  appId: "1:256617869238:web:651b7fa8126bc400935b17",
  measurementId: "G-7730YKJKYP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
