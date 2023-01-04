
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { gtStorage } from "firebase/storage";  

const firebaseConfig = {
  apiKey: "AIzaSyBgLk5B0_L6AXHyZlbVHeHibuAimTAjqqo",
  authDomain: "restaurantapp-92b9e.firebaseapp.com",
  databaseURL: "https://restaurantapp-92b9e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-92b9e",
  storageBucket: "restaurantapp-92b9e.appspot.com",
  messagingSenderId: "386716037287",
  appId: "1:386716037287:web:acdd6acf3f161fa4162b82"
};


const app = initializeApp(firebaseConfig);