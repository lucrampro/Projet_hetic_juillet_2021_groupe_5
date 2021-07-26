import React from 'react';
import '../assets/styles/login.scss'
import { InputComponent } from '../components'
import { useHistory } from 'react-router-dom'
  
const Login = () => {

  const history = useHistory();

  const login = () => {
    history.push('/accueil');
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
