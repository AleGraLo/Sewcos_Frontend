import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/footerstyle.css'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container fluid className="py-4">

      </Container>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Derechos Reservados:
        <a className="text-dark" href="https://sewcos.com/">Sewcos.com</a>
      </div>
    </footer>
  );
};

export default Footer;
