import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css';

const CarAppNavBar =() => {
    return(    
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="Navbar">
            <Link to="/" className="navLink">    Home   </Link>
            <Link to="/carlist" className="navLink">   Search   </Link>
            <Link to="/sewy" className="navLink">  Bookmarks </Link>
            <Link to="/contact" className="navLink">  Contact </Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    

}
export default CarAppNavBar;

