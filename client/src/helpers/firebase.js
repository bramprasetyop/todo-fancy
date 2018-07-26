import firebase from 'firebase'



var config = {
  apiKey: "AIzaSyDFA-5QPsvUVJ7EnZD1__jiWMgDSlOGKsQ",
  authDomain: "todo-panci.firebaseapp.com",
  databaseURL: "https://todo-panci.firebaseio.com",
  projectId: "todo-panci",
  storageBucket: "todo-panci.appspot.com",
  messagingSenderId: "94283334239"
};
firebase.initializeApp(config);

const providerFB = new firebase.auth.FacebookAuthProvider()
providerFB.addScope('email')

export { firebase, providerFB }
