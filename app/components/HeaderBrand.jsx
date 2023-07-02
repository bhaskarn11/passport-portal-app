'use client'
import { Navbar } from "react-bootstrap";
import Image from "next/image"
import React from 'react'
import Link from "next/link";
import PassportSevaLogo from "@/assets/image/passportSeva.gif"

function HeaderBrand({className}) {
    return (
        <Navbar.Brand className={className} as={Link} href="/">
            <Image alt="Passport Seva Logo" src={PassportSevaLogo} style={{ objectFit: 'scale-down' }} />
        </Navbar.Brand>
    )
}

export default HeaderBrand