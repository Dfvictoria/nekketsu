import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../NavBar.css";
import * as Icon from "react-bootstrap-icons";

function NavBar() {
  return (
    <>
      <br />
      <Navbar bg="black" variant="dark">
        <Container height="100">
          <img
            id="logo"
            src="https://i.imgur.com/DQW40zJ.png"
            width="150"
            height="85"
            className="d-inline-block align-top"
            alt="Nekketsu logo"
          />
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navBarLinks">
              <Icon.Journal className="navBarIcon" />
              COMICS
            </Nav.Link>
            <Nav.Link href="#features" className="navBarLinks">
              <Icon.Book className="navBarIcon" />
              LIBROS
            </Nav.Link>
            <Nav.Link href="#pricing" className="navBarLinks">
              <Icon.Columns className="navBarIcon" />
              MANGA
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
