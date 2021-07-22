import React from 'react';
import '../assets/styles/login.scss'
import {InputComponent, ButtonComponent} from '../components'
const Login = () => {
  return (
    <div className="login--page">
      <h1>SecuHome</h1>
      <p>Veuillez vous identifiez pour accéder à la plateforme</p>
      <InputComponent text="Identifiant"/>
      <InputComponent text="Mot de passe"/>
      <ButtonComponent text="Valider"/>
    </div>
  );
}

export default Login;
