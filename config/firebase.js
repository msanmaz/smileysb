import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';



export function loadDB() {


    try {
        var config = {
            apiKey: "AIzaSyBirxGwoQDddMQyvxE281KZCdC64bZES_U",
            authDomain: "smileysbarber.firebaseapp.com",
            projectId: "smileysbarber",
            storageBucket: "smileysbarber.appspot.com",
            messagingSenderId: "721119149079",
            appId: "1:721119149079:web:ad74ec4826dabf63b8f052",
            measurementId: "G-TW8RR6VJCD"
        };
        firebase.initializeApp(config);
        const storage = firebase.storage().ref();
    } catch(err) {
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
          }
    }
    return firebase;
}