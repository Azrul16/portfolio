import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2DmSCSmaKBSh0qIiFQcgPA1jfMbxQ0bg",
    authDomain: "portfolio-a0356.firebaseapp.com",  
    projectId: "portfolio-a0356",  
    storageBucket: "portfolio-a0356.firebasestorage.app",
    messagingSenderId: "208794991822",
    appId: "1:208794991822:web:bb2601531581d278eba49f",
    measurementId: "G-XT58TBPGCE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 