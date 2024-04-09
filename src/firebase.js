import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyCJIpMabPTRyAahXll8koJNSIOIdzyF6uw",
  authDomain: "bachelorproject-8bb58.firebaseapp.com",
  projectId: "bachelorproject-8bb58",
  storageBucket: "bachelorproject-8bb58.appspot.com",
  messagingSenderId: "650008239719",
  appId: "1:650008239719:web:b2c39e268d0bb46e433ec2"
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storageDB = getStorage(app);









