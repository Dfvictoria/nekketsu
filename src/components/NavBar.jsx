import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import  "../styles/NavBar.css"
import * as Icon from "react-bootstrap-icons";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <br />
      <Navbar bg="black" variant="dark">
        <Container height="100">
          <Nav.Link href="localhost:3000">
            <img
              id="logo"
              src="https://i.imgur.com/DQW40zJ.png"
              width="150"
              height="85"
              className="d-inline-block align-top"
              alt="Nekketsu logo"
              
            />
          </Nav.Link>

          <Nav>
            <Nav.Link className="navBarLinks">
              <Icon.Journal className="navBarIcon" />
              COMICS
            </Nav.Link>
            <Nav.Link className="navBarLinks">
              <Icon.Book className="navBarIcon" />
              LIBROS
            </Nav.Link>
            <Nav.Link className="navBarLinks">
              <Icon.Columns className="navBarIcon" />
              MANGA
            </Nav.Link>
          </Nav>
          <Nav.Link>
            <CartWidget />
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
