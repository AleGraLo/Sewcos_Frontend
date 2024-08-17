import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../css/navbarstyle.css'

const NavBar = () => {
  const[expanded, setExpanded] = useState(false)
  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
    <Container>
      <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>Sewcos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={()=> setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/trends" onClick={()=> setExpanded(false)}>Tendencias</Nav.Link>
            <Nav.Link as={Link} to="/sewcoser" onClick={()=> setExpanded(false)}>Sewcoser</Nav.Link>
            <Nav.Link as={Link} to="/user-profile" onClick={()=> setExpanded(false)}>Usuario</Nav.Link>
            <Nav.Link as={Link} to="/admin" onClick={()=> setExpanded(false)}>Administrador</Nav.Link>
            <Nav.Link as={Link} to="/cours" onClick={()=> setExpanded(false)}>Cursos</Nav.Link>
            <Nav.Link as={Link} to="/shop" onClick={()=> setExpanded(false)}>Tienda</Nav.Link>
            <Nav.Link as={Link} to="/cart"onClick={()=> setExpanded(false)}>Carrito</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" onClick={()=> setExpanded(false)}>Iniciar Sesión</Nav.Link>
            <Nav.Link as={Link} to="/register" onClick={()=> setExpanded(false)}>Registrarse</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

