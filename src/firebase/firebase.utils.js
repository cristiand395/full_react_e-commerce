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

export const createUserProfileDocument = async (userAuth, addionalData) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists){
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
  console.log(snapShot)
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

