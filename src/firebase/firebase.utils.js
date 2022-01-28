import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD4bRer3mV1yIGH3FlY-p1xF0XswSIpuV4",
    authDomain: "full-react-e-commerce.firebaseapp.com",
    projectId: "full-react-e-commerce",
    storageBucket: "full-react-e-commerce.appspot.com",
    messagingSenderId: "185132237916",
    appId: "1:185132237916:web:06b684dbf4c04c984f1299"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

