import React from 'react';

function Footer() {
  return (
    <footer>
      <h6 className="footerTitle">PowerFit</h6>
      <ul className="horizontalMenuList">
        <li><a href="../html/index.html">Home</a></li>
        <li><a href="../html/services.html">Cursos</a></li>
        <li><a href="../html/services.html">Maquinas</a></li>
        <li><a href="../html/payment.html">Cuotas</a></li>
        <li><a href="../html/services.html">Reservas</a></li>
        <li><a href="../html/contact.html">Contacto</a></li>
      </ul>
      <ul className="socialNetworks">
        <li><img src="../src/img/socialNetworks/Ptwitter.png" alt="Twitter" width="80%" /></li>
        <li><img src="../src/img/socialNetworks/Pinstagram.png" alt="Instagram" width="80%" /></li>
        <li><img src="../src/img/socialNetworks/Pfacebook.png" alt="Facebook" width="80%" /></li>
        <li><img src="../src/img/socialNetworks/Pyoutube.png" alt="YouTube" width="80%" /></li>
      </ul>
    </footer>
  );
}

export default Footer;
