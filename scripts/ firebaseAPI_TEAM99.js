//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC0cn8E66EMU-vZyifI4fwb8y44GCvSCyY",
    authDomain: "comp1800-60fdc.firebaseapp.com",
    projectId: "comp1800-60fdc",
    storageBucket: "comp1800-60fdc.firebasestorage.app",
    messagingSenderId: "227068694684",
    appId: "1:227068694684:web:e57763584dd41242b49d59"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

