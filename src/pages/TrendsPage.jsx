import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/trendsPage.css';

const TrendsPage = () => {
  // Suponiendo que tienes una lista de publicaciones que deseas mostrar
  const posts = [
    { id: 1, title: 'Tendencia 1', content: 'Descripción de la tendencia 1...' },
    { id: 2, title: 'Tendencia 2', content: 'Descripción de la tendencia 2...' },
    // Agrega más publicaciones según sea necesario
  ];

  return (
    <Container className="py-5">
      <h1 className="display-4">Tendencias</h1>
      <Row>
        {posts.map(post => (
          <Col key={post.id} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendsPage;
