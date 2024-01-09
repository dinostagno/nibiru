// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//   const footerStyle = {
//     position: 'fixed', // Posiciona el pie de página de manera "fija"
//     bottom: '0', // Asegura que el pie de página esté en la parte inferior de la vista del navegador
//     width: '100%', // Asegura que el pie de página ocupe todo el ancho del contenedor
//     background: 'radial-gradient(circle, rgba(112,128,144,0.3) 0%, rgba(255,255,255,1) 90%)', // Gradiente de color de fondo plomo suave
//   };

//   return (
//     <footer style={footerStyle} className="mt-auto py-3">
//       <Container>
//         <Row>
//           <Col className="text-center">
//             <p className="mb-0">© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center">
//             <a href="#!">Términos de servicio</a> | <a href="#!">Política de privacidad</a>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ text }) => (
  <footer style={{ background: 'radial-gradient(circle, rgba(112,128,144,0.3) 0%, rgba(255,255,255,1) 90%)' }}>
    <Container>
      <Row>
        <Col className="text-center py-3">
          {text}
        </Col>
      </Row>
      <Row>
        <Col className="text-center py-3">
          Todos los derechos reservados © 2024
        </Col>
      </Row>
    </Container>
  </footer>
);

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;


