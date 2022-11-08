// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-k1r24ct3ziQ-M9ooJcNqNw4NnPlyxgE",
  authDomain: "photosque-3ad66.firebaseapp.com",
  projectId: "photosque-3ad66",
  storageBucket: "photosque-3ad66.appspot.com",
  messagingSenderId: "1051720627768",
  appId: "1:1051720627768:web:043185119dfadd93dc98cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   appId:process.env.REACT_APP_appId
// };
