import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import CartWidget from '../components/CartWidget';

function NavBar() {
    return (
    <Navbar className="py-0 navbar navbar-dark sticky-top navbar-expand-lg color__negro margen2">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="fw-bold justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to={"/"}>HOME</Link>
                    <Link className="nav-link" to={"/category/libros"}>LIBROS</Link>
                    <Link className="nav-link" to={"/category/accesorios"}>ACCESORIOS</Link>
                    <Link className="nav-link" to={"/category/cursos"}>CURSOS</Link>
                    <Link className="nav-link" to={"/contacto.html"}>CONTACTO</Link>
                </div>
            </div>
            <CartWidget/>
        </div>
    </Navbar>
    
    );
}
export default NavBar;

