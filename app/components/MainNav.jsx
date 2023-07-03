'use client'

import { NavDropdown, Nav, Navbar, Form, Button, Offcanvas, Container, Stack} from "react-bootstrap";
import HeaderBrand from "./HeaderBrand";
import AccessibilityWidget from "./AccessibilityWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";



const menus = [
    {
        title: "Home",
        href: "/",
        subMenus: []
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        subMenus: []
    },
    {
        title: "Services",
        href: "#",
        subMenus: [
            {
                title: "Appointment Availability",
                href: "/services/appointment-availability"
            },
            {
                title: "Fees Calculator",
                href: "/services/fees-calculator"
            },
            {
                title: "Locate Police Station",
                href: "/services/locate-police-station"
            },
            {
                title: "Track Application",
                href: "/services/track-application"
            }
        ]
    },
    {
        title: "Grievances/Feedbacks",
        href: "#",
        subMenus: [
            {
                title: "Raise Ticket",
                href: "/help/raise-ticket"
            },
            {
                title: "Track Grievances",
                href: "/help/track-grievance-status"
            }
        ]
    },
    {
        title: "Help Center",
        href: "/help",
        subMenus: []
    }
]


function MainNav() {
    return (
        <Navbar sticky='top' expand="lg" bg="white" data-bs-theme="light" >
            <Stack direction='horizontal' className='px-3 d-md-none w-100'>
                <HeaderBrand className="d-md-none" />
                <div className='me-0 ms-auto'>
                    <Navbar.Toggle aria-controls="offcanvasNavbarLabel-expand-md" />
                </div>
            </Stack>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
            >
                <Offcanvas.Header closeButton />
                <Offcanvas.Body >
                    <Container>
                        <Nav >
                            <Nav.Item >
                                <HeaderBrand className="d-none d-md-block" />
                            </Nav.Item>
                            <Nav.Item className='ms-md-auto py-md-3'>
                                <Nav className='gap-3'>

                                    <Nav.Item>
                                        <AccessibilityWidget />
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Stack gap={2} direction='horizontal'>
                                            <Button size="sm" variant="outline-primary" href="/users/login">Login</Button>
                                            <Button size="sm" variant="primary" href="/users/register">Register</Button>
                                        </Stack>
                                    </Nav.Item>
                                </Nav>
                            </Nav.Item>
                        </Nav>
                        <Nav variant='underline' >
                            {
                                menus.map((menu, idx) => (
                                    menu.subMenus.length === 0 ? (
                                        <Nav.Item key={idx}>
                                            <Nav.Link className='text-primary' eventKey={menu.href} href={menu.href}>{menu.title}</Nav.Link>
                                        </Nav.Item>
                                    ) : (
                                        <NavDropdown key={idx} title={<span className='text-primary'>{menu.title}</span>}>
                                            {
                                                menu.subMenus.map((sm, idx2) => (
                                                    <NavDropdown.Item className='text-primary' key={idx2} href={sm.href} eventKey={sm.href}>{sm.title}</NavDropdown.Item>
                                                ))
                                            }

                                        </NavDropdown>
                                    )

                                ))
                            }
                            <Nav.Item>
                                <Form className="d-flex ms-auto">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Button>
                                </Form>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Offcanvas.Body>
            </Navbar.Offcanvas>

        </Navbar>
    )
}

export default MainNav