import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDbpMNJkj5A5SHSJq5yyr1at3NzAdjEDtI',
  authDomain: 'fir-auth-1e9c2.firebaseapp.com',
  projectId: 'fir-auth-1e9c2',
  storageBucket: 'fir-auth-1e9c2.appspot.com',
  messagingSenderId: '956577462984',
  appId: '1:956577462984:web:a075e6ef090a0f02c683fd',
}

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.PhoneAuthProvider.PROVIDER_ID],
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export { firebase, uiConfig }
