import firebase from "firebase";
require("@firebase/firestore");




const firebaseConfig = {
  apiKey: "AIzaSyCPxJeJFXBjw8xBaSKRCRy8aWcSzlPu9cI",
  authDomain: "project-71-c8103.firebaseapp.com",
  projectId: "project-71-c8103",
  storageBucket: "project-71-c8103.appspot.com",
  messagingSenderId: "262526394540",
  appId: "1:262526394540:web:97e688442a9a268ee93f09"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
