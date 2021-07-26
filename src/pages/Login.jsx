import React, { useState, useContext } from 'react';
import '../assets/styles/login.scss'
// import { InputComponent } from '../components'
import { useHistory } from 'react-router-dom'
import { firebase } from '../firebase'
import { userInfoContext} from '../store'

const Login = () => {
  const { setuserInfo }  = useContext(userInfoContext)
  const history = useHistory();
  const [user_name, setuser_name] = useState('');
  const [password, setpassword] = useState('');

  const login = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(user_name, password)
    .then(response  => {
        console.log(response.user);
        console.log(`username: ${user_name}`);
        console.log(`password: ${password}`);
        
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
        .doc(uid)
        .get()
        .then(firestoreDocument => {
            console.log(firestoreDocument);
            
            if (!firestoreDocument.exists) {
            alert("User does not exist anymore.")
            console.error(firestoreDocument)
            return;
            }
            const user = firestoreDocument.data()
            setuserInfo(user)
            // ici 
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
      <input type="text" placeholder="toto@toto.com" onChange={ e => setuser_name(e.target.value)}/>
      <input type="password" placeholder="mot de passe" onChange={e => setpassword(e.target.value)} name="" id=""/>
      <button onClick={login}>Valider</button>
    </div>
  );
}

export default Login;
