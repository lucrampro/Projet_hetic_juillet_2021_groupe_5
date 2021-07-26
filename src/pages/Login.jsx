import React from 'react';
import '../assets/styles/login.scss'
import { InputComponent } from '../components'
import { useHistory } from 'react-router-dom'
import { firebase } from '../firebase'
const Login = () => {

  const history = useHistory();

  const login = () => {

    firebase
    .auth()
    .signInWithEmailAndPassword('melvin@gmail.com', '123456')
    .then( response  => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
        .doc(uid)
        .get()
        .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
            alert("User does not exist anymore.")
            console.error(firestoreDocument)
            return;
            }
            const user = firestoreDocument.data()
            console.log(user)
            history.push('/accueil');
            })
        .catch(error => { console.error(error) });
      })
    .catch(error => {
      console.error(error)
    })

  }

  return (
    <div className="login--page">
      <h1>SecuHome</h1>
      <p>Veuillez vous identifiez pour accéder à la plateforme</p>
      <InputComponent text="Identifiant"/>
      <InputComponent text="Mot de passe"/>
      <button onClick={login}>Validerr</button>
    </div>
  );
}

export default Login;
