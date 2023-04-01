import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCqSYj6QjLp9u7YyUdYDVspTOgpVC61WtI",
  authDomain: "mi-app-f9125.firebaseapp.com",
  projectId: "mi-app-f9125",
  storageBucket: "mi-app-f9125.appspot.com",
  messagingSenderId: "679043450867",
  appId:"1:679043450867:web:b062d5dd3bcf354e47f486" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)