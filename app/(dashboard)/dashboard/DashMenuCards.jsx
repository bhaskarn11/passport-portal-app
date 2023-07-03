'use client'

import Link from 'next/link';
import React from 'react'
import { ListGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function DashMenuCards({ menu }) {
    return (
        <Card className='shadow-sm text-primary' border='primary'>
            <Card.Body>
                {
                    menu.subMenus.length === 0 ? (
                        <Card.Title as={Link} href={menu.href} className='link-underline icon-link icon-link-hover stretched-link link-underline-opacity-0 h5'>
                            {
                                menu.menuIcon != "" ? <FontAwesomeIcon icon={menu.menuIcon} /> : ""
                            }
                            {menu.title}
                        </Card.Title>

                    ) : (
                        <Card.Title className='text-decoration-none icon-link'>
                            {
                                menu.menuIcon != "" ? <FontAwesomeIcon icon={menu.menuIcon} /> : ""

                            }
                            {menu.title}
                        </Card.Title>
                    )
                }
                <ListGroup variant="flush">
                    {
                        menu.subMenus.map((sm, i) => (
                            <ListGroup.Item href={`/dashboard${sm.href}`} className='icon-link icon-link-hover' action eventKey={sm.href} key={i}>
                                {sm.title}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </ListGroup.Item>

                        ))
                    }

                </ListGroup>
            </Card.Body>
        </Card>

    )
}

export default DashMenuCards