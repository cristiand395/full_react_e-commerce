// import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app"
import { getDocs, getFirestore } from 'firebase/firestore'
//import 'firebase/compat/auth'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
//import { getAuth, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyD4bRer3mV1yIGH3FlY-p1xF0XswSIpuV4",
  authDomain: "full-react-e-commerce.firebaseapp.com",
  projectId: "full-react-e-commerce",
  storageBucket: "full-react-e-commerce.appspot.com",
  messagingSenderId: "185132237916",
  appId: "1:185132237916:web:06b684dbf4c04c984f1299"
}

//firebase.initializeApp(config)
const firebaseApp = initializeApp(config);
export const firestore = getFirestore(firebaseApp)

export const createUserProfileDocument = async (userAuth, addionalData) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  //const snapShot = await userRef.get()
  const snapShot = await getDocs(userRef)

  if (!snapShot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addionalData
      })
    }
    catch (error) {
      console.log('error creating user', error.message)
    }
  } 
  return userRef
}



//export const auth = firebase.auth()


const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
//export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const auth = getAuth(firebaseApp);


export const signInWithGoogle = () => signInWithPopup(auth, provider)

//export default firebase
export default firebaseApp


