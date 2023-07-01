'use client'

import Link from 'next/link';
import React from 'react'
import { Card, Nav, Navbar, Accordion, ListGroup } from "react-bootstrap";


function Sidebar({ topics, article }) {



    return (

        <Navbar expand='lg'>
            <Navbar.Toggle />
            <Navbar.Collapse id='topics-sidebar'>
                <Nav as={Accordion} navbarScroll defaultActiveKey={1} variant='underline' className='flex-column w-100'>
                    {
                        topics.map((topic, idx) => (
                            <Accordion.Item key={idx}>
                                <Accordion.Header>
                                    {topic.name}
                                </Accordion.Header>

                                <Accordion.Body className='mx-0 my-0 px-0 py-0'>
                                    <ListGroup defaultActiveKey={article._id} variant='flush'>
                                        {
                                            topic.articles.map((a, idx) => (
                                                <ListGroup.Item as={Link} eventKey={a._id} action href={a.articleSlug} key={idx}>
                                                    {a.title}
                                                </ListGroup.Item>
                                            ))
                                        }
                                    </ListGroup>
                                </Accordion.Body>

                            </Accordion.Item>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>

        </Navbar>


    )
}

export default Sidebar