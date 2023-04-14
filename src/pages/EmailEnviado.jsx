import React from 'react';
import '@styles/EmailEnviado.scss'
import email from '@assets/email.png'
import logo from '@assets/logo1.png'

const EmailEnviado = () => {
    return (
<div className="emailEnviado">
  <div className="form-container">
    <h4>Email enviado</h4>
    <p>
      Por favor revisa tu bandeja de entrada para restablecer tu contraseña
    </p>
    <img src={email} alt="email" className="email" />
    <button className="boton-principal" onclick="window.location='../Suscribirse/Suscribirse.html'">
      Login
    </button>
    <p>
      No has recibido el codigo?
      <a href="../Recuperar/Recuperar.html" className="reenviar"> Reenviar</a>
    </p>
  </div>
</div>

    );
}

export default EmailEnviado;