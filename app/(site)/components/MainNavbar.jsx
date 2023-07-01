'use client'

import { NavDropdown, Nav, Navbar, Form, Button, Offcanvas, Container, Row, Col } from "@/bootstrap";
import PassportSevaLogo from "@/assets/image/passportSeva.gif"
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function MainNavbar() {
  return (
    <Navbar sticky="top" expand="md" className="exanand-lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image alt="Passport Seva Logo" src={PassportSevaLogo} style={{ objectFit: 'scale-down' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row className="w-100 gy-2">
              <Col className="d-flex col-12">
                <Nav className="ms-md-auto justify-left">
                  <Nav.Item className="me-2 my-2 my-md-0">
                    <LanguageSelector />
                  </Nav.Item>
                  <Nav.Item className="me-2 my-2 my-md-0 btn btn-sm btn-outline-primary" as={Link} href="/users/login">Login</Nav.Item>
                  <Nav.Item as={Link} className="btn btn-sm btn-primary"  href="/users/register">Register</Nav.Item>
                </Nav>
              </Col>
              <Col className="col-12">
                <Nav className="align-middle">
                  <Nav.Link as={Link} href="/">Home</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} href="/help">
                    Help
                  </Nav.Link>
                  <Form className="d-flex ms-auto">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">
                      <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                  </Form>
                </Nav>

              </Col>
            </Row>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  )
}