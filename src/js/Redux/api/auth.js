import firebase from "firebase/app";
import 'firebase/auth';
import db from '../../db/firestore'

const createUserProfile = userProfile =>
  db.collection("profiles")
    .doc(userProfile.uid)
    .set(userProfile)

export const getUserProfile = uid =>
  db.collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => snapshot.data())

export async function register({ email, password, username, avatar }) {
  const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
  await createUserProfile({ uid: user.uid, username, email, avatar, joinChats: [] })
}
export const login = ({ email, password }) => {
  debugger
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const logout = () => {
  debugger
  return firebase.auth().signOut();
}


export const onAuthStateChanges = onAuth => {
  return firebase.auth().onAuthStateChanged(onAuth);
}