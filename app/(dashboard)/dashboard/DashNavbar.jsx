'use client'

import HeaderBrand from '@/app/components/HeaderBrand';
import React from 'react'
import { Navbar, Nav, Offcanvas, Container, NavDropdown, Stack, Row, Button } from "react-bootstrap";
import Link from "next/link";

import AccessibilityWidget from '@/app/components/AccessibilityWidget';
import Avatar from 'react-avatar';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";

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

    const { data: session } = useSession()

    const handleLogout = async () => {
        await signOut()
    }

    return (
        <Navbar sticky='top' expand="lg" bg='white'>
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
                                        {
                                            session && (
                                                <Stack gap={2} direction='horizontal'>
                                                    <Stack gap={2} direction='horizontal' className='link-underline link-underline-opacity-0' as={Link} href={"/profile"}>
                                                        <Avatar name={session.user.first_name} round size={40} />
                                                        <h5>{session.user.first_name} {session.user.last_name}</h5>
                                                    </Stack>
                                                    <Button size='sm' variant='outline-warning' onClick={handleLogout}>Log out</Button>
                                                </Stack>
                                            )
                                        }
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

                        </Nav>
                    </Container>
                </Offcanvas.Body>
            </Navbar.Offcanvas>

        </Navbar>
    )
}

export default DashNavbar