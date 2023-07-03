import Navbar from 'react-bootstrap/Navbar';
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
                    <Nav.Link className="nav-link btn__fondo link-dark" href="index.html">HOME</Nav.Link>
                    <Nav.Link href="novedades.html">NOVEDADES</Nav.Link>
                    <Nav.Link href="market.html">PRODUCTOS</Nav.Link>
                    <Nav.Link href="turnos.html">TURNOS</Nav.Link>
                    <Nav.Link href="cursos.html">CURSOS</Nav.Link>
                    <Nav.Link href="contasto.html">CONTACTO</Nav.Link>
                    <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
                </div>
            </div>
        </div>
    </Navbar>
  );
}
export default NavBar;

// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertsiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarssScroll" />
//         <Navbar.Collapse id="navbarScrossll">
//           <Nav
//             className="me-auto"
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           asdasd
//           <Form className="d-flddex">
// asdasd
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;