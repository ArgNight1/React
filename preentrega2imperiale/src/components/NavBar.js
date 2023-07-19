import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../components/CartWidget';

function NavBar() {
  return (
    <Navbar className="py-0 navbar navbar-dark sticky-top navbar-expand-lg color__negro">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="fw-bold justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Nav.Link className="nav-link btn__fondo link-dark" href="/">HOME</Nav.Link>
                    <Nav.Link href="/">PRODUCTOS</Nav.Link>
                    <Nav.Link href="/category/libros">LIBROS</Nav.Link>                    
                    <Nav.Link href="/category/accesorios">ACCESORIOS</Nav.Link>
                    <Nav.Link href="/category/cursos">CURSOS</Nav.Link>
                    <Nav.Link href="/contacto.html">CONTACTO</Nav.Link>
                    <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
                </div>
            </div>
        </div>
    </Navbar>
    );
}
export default NavBar;

