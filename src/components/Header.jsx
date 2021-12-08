import { Navbar, Container } from "react-bootstrap";
import logo from "../img/logoS01.jpg";
const Header = (props) => {

  return (
    <>
    <Navbar>
    <Container>
        <Navbar.Brand href="#home">Schnelltest Zahnzentrum Dr. Hijazi</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            Zahnzentrum Dr.Hijazi <a href="https://zahnzentrumdrhijazi.de/" target="_blank" rel="noreferrer" >
                <img src={logo} alt="DrHijaziLogo" width="100" height="100" />
            </a>
        </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  );
}

export default Header;