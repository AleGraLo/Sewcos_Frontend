import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/homestyle.css'
const HomePage = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={6}>
          <h1 className="display-4">Bienvenido a Sewcos</h1>
          <p className="lead">
            La plataforma donde la ropa se encuentra con tu personalidad.
          </p>
          <Button variant="outline-primary" href="/shop">Explora la Tienda</Button>
        </Col>
        <Col lg={6}>
          {/* Aquí podrías incluir una imagen representativa si lo deseas */}
          <img src="./Homepage.jpg" alt="Moda" className="img-fluid mt-3"/>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
