import { Col, Container, NavbarBrand, Row, Stack } from "@/bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube, faFlickr } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image";
import Link from "next/link"

import NationalEmblem from "@/assets/image/National-Emblem-01.svg"
import AppStoreBadge from "@/assets/image/app-store-badge.svg"
import PlayBadge from "@/assets/image/google-play-badge.png"
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const footerMenus = [
    {
        title: "About us",
        links: [
            {
                title: "PSP Division",
                url: "/about-us/who-we-are"
            },
            {
                title: "Passport Seva",
                url: "/about-us/passport-seva"
            },
            {
                title: "Passport Acts and Rules",
                url: ""
            },
            {
                title: "Citizen Charter",
                url: ""
            }
        ]
    },
    {
        title: "Contact us",
        links: [
            {
                title: "FAQs",
                url: "/help#faq"
            },
            {
                title: "Grievance/Feedback",
                url: "/help/raise-ticket"
            },
            {
                title: "Track Grievance/Feedback Status",
                url: "/help/track-grievance-status"
            }
        ]
    },
    {
        title: "Related Websites",
        links: [
            {
                title: "Ministry of External Affairs",
                url: "https://mea.gov.in"
            },
            {
                title: "National Portal of India",
                url: "https://india.go.in"
            },
            {
                title: "National Portal of India",
                url: "https://india.go.in"
            },
            {
                title: "Bureau of Immigration",
                url: "https://boi.go.in"
            },
            {
                title: "Ministry of Home Affairs",
                url: "https://mha.gov.in"
            }
        ]
    },
    {
        title: "Legal Information",
        links: [
            {
                title: "Privacy Policy",
                url: "/legal/privacy-policy"
            },
            {
                title: "Terms & Conditions",
                url: "/legal/terms-conditions"
            },
            {
                title: "Copyright Policy",
                url: "/legal/copyright-policy"
            }
        ]
    }
]


export default function Footer() {
    return (
        <footer className="bg-primary mt-4 py-4 text-white">
            <Container>
                <Row className="pb-4 justify-left gy-4">
                    {
                        footerMenus.map((menu, index) => (
                            <Col className="col-12 col-md-3" key={index}>
                                <Stack gap={1} className="bg-primary pb-3" variant="flush" title={menu.title}>
                                    <h4>{menu.title}</h4>
                                    {
                                        menu.links.map((link, idx) => (
                                            <Link href={link.url} key={idx} className="link-underline text-white link-offset-2 link-offset-3-hover link-dark link-underline-opacity-0 link-underline-opacity-100-hover ">
                                                {link.title}
                                            </Link>
                                        ))
                                    }

                                </Stack>
                                <hr className="d-md-none d-block"/>
                            </Col>
                        ))
                    }


                </Row>
                <Row>
                    <Stack gap={2} direction="horizontal" className="align-middle">
                        <span>
                            Follow us on:
                        </span>
                        <FontAwesomeIcon size="lg" icon={faFacebook} />
                        <FontAwesomeIcon size="lg" icon={faTwitter} />
                        <FontAwesomeIcon size="lg" icon={faYoutube} />
                        <FontAwesomeIcon size="lg" icon={faFlickr} />
                    </Stack>
                    <Stack gap={2} direction="horizontal">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>Call us: </span>
                        <Link className="text-white" href="tel:1800-258-1800">
                            <strong>1800-258-1800</strong>
                        </Link>
                        <span>(toll free)</span>
                    </Stack>
                </Row>
                <Row className="py-3 align-middle">
                    <Col className="col-12 col-md-6 gx-2">
                        <NavbarBrand>
                            <Image alt="National Emblem" src={NationalEmblem} color="white" style={{ objectFit: "cover" }} height={60} width={40} />
                            <span className="text-white h4 pl-4">india.gov.in</span>
                        </NavbarBrand>
                    </Col>
                    <Col className="ms-auto">
                        <Stack>
                            <h5>Download mPassport Seva App</h5>
                            <div>
                                <Link href="#">
                                    <Image src={PlayBadge} alt="Google Play Badge" width={130} height={56} />
                                </Link>
                                <Link href="#">
                                    <Image src={AppStoreBadge} alt="App Store Badge" />

                                </Link>
                            </div>
                        </Stack>

                    </Col>
                </Row>
                <hr/>
                <Row className="pt-4">
                    <small>© Ministry of External Affairs, Government of India. All rights reserved.</small>
                    <small>Last updated: 12/06/2023</small>
                    <small>This site is best viewed in 1024 * 768 resolution with latest version of Chrome, Firefox, Safari and Microsoft Edge.</small>
                </Row>
            </Container>
        </footer>
    )
}