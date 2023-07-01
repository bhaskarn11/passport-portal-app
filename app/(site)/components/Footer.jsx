import { Col, Container, ListGroup, ListGroupItem, NavbarBrand, Row, Stack } from "@/bootstrap";
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
                url: ""
            },
            {
                title: "Terms & Conditions",
                url: ""
            },
            {
                title: "Copyright Policy",
                url: ""
            }
        ]
    }
]


export default function Footer() {
    return (
        <Container fluid className="bg-primary mt-4 py-4 text-white">
            <Container>
                <Row className="pb-4 justify-left">
                    {
                        footerMenus.map((menu, index) => (
                            <Col className="col-12 col-md-3" key={index}>
                                <Stack gap={1} className="bg-primary text-white pb-3" variant="flush" title="Quick links">
                                    <h4>{menu.title}</h4>
                                    {
                                        menu.links.map((link, idx) => (
                                            <Link href={link.url} key={idx} className="bg-primary text-white">
                                                {link.title}
                                            </Link>
                                        ))
                                    }

                                </Stack>
                            </Col>
                        ))
                    }


                </Row>
                <Row>
                    <Stack gap={2} direction="horizontal" className="text-white align-middle">
                        <span className="text-white">
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
                        <Link className="text-white" href="phone:1800-258-1800">1800-258-1800</Link>
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

                <hr className="text-white" />
                <Row className="pt-4 text-white">
                    <small>© Ministry of External Affairs, Government of India. All rights reserved.</small>
                    <small>Last updated: 12/06/2023</small>
                    <small>This site is best viewed in 1024 * 768 resolution with latest version of Chrome, Firefox, Safari and Microsoft Edge.</small>
                </Row>
            </Container>
        </Container>
    )
}