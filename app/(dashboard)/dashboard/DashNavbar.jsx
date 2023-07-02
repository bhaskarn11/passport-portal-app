'use client'

import HeaderBrand from '@/app/components/HeaderBrand';
import React from 'react'
import { Navbar, Nav, Offcanvas, Container, NavDropdown, Stack, Row } from "react-bootstrap";
import Link from "next/link";

import AccessibilityWidget from './AccessibilityWidget';
import Avatar from 'react-avatar';


const menus = [
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


function DashNavbar() {
    return (
        <Navbar expand="lg" >
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
                        <Nav>
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
                                            <Avatar name='Bhaskar Nar' round size={40} />
                                            <h5>Bhaskar Nar</h5>
                                        </Stack>
                                    </Nav.Item>
                                </Nav>
                            </Nav.Item>
                        </Nav>
                        <Nav variant='underline'>
                            {
                                menus.map((menu, idx) => (
                                    menu.subMenus.length === 0 ? (
                                        <Nav.Item key={idx}>
                                            <Nav.Link eventKey={menu.href} href={menu.href}>{menu.title}</Nav.Link>
                                        </Nav.Item>
                                    ) : (
                                        <NavDropdown key={idx} title={menu.title}>
                                            {
                                                menu.subMenus.map((sm, idx2) => (
                                                    <NavDropdown.Item key={idx2} href={sm.href} eventKey={sm.href}>{sm.title}</NavDropdown.Item>
                                                ))
                                            }

                                        </NavDropdown>
                                    )

                                ))
                            }

                        </Nav>
                    </Container>
                </Offcanvas.Body>
            </Navbar.Offcanvas>

        </Navbar>
    )
}

export default DashNavbar