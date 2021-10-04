import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD6JwdnLfjmoAwZ2tpdflljfOmXU-9RQtM",
    authDomain: "pokedex-11991.firebaseapp.com",
    projectId: "pokedex-11991",
    storageBucket: "pokedex-11991.appspot.com",
    messagingSenderId: "843448700851",
    appId: "1:843448700851:web:7ea12017127f809de205c6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();



export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}



