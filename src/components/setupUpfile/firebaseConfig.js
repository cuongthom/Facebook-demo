// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUgzMVN5N-G3I6a45Es4JDX6hzI-f1WOU",
  authDomain: "cuongcuong2205-d9051.firebaseapp.com",
  projectId: "cuongcuong2205-d9051",
  storageBucket: "cuongcuong2205-d9051.appspot.com",
  messagingSenderId: "488049251266",
  appId: "1:488049251266:web:1744d0882b17c113ce7c5b",
  measurementId: "G-39XFKN9F9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;