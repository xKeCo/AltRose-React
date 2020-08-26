import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBc1adp2859yTE6zMWwJ7_WxWdXHEZn-Yo",
  authDomain: "alt-rose.firebaseapp.com",
  databaseURL: "https://alt-rose.firebaseio.com",
  projectId: "alt-rose",
  storageBucket: "alt-rose.appspot.com",
  messagingSenderId: "958149238050",
  appId: "1:958149238050:web:f14adfca52a36860c6997b",
  measurementId: "G-3VVYHB4LB4",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
