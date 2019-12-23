import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3mnlCdqIKjsz65ZqCJahLHJ0ET6pLuqc",
    authDomain: "react-demo-cefbc.firebaseapp.com",
    databaseURL: "https://react-demo-cefbc.firebaseio.com",
    projectId: "react-demo-cefbc",
    storageBucket: "react-demo-cefbc.appspot.com",
    messagingSenderId: "957770289488",
    appId: "1:957770289488:web:fd8c53310b36640a7e9c55",
    measurementId: "G-F58ES59LWQ"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;