import Link from "next/link";
import { Card, ListGroup } from "@/bootstrap";

const quickLinks = [
    {
        title: "Check Appointment Vailability",
        url: "/services/appointment-availability"
    },
    {
        title: "Track Application status",
        url: "/services/track-application"
    },
    {
        title: "Fee Calculator",
        url: "/services/fees-calculator"
    },
    {
        title: "Know Your Police Station",
        url: "/services/locate-police-station"
    },
    {
        title: "Locate Passport Seva Kendra",
        url: ""
    },
    {
        title: "Locate Common Service Center",
        url: ""
    }
]

export default function QuickLinkSidebar() {
    return (
        <Card border="secondary" style={{borderStyle: "solid", borderWidth: "thick"}}>
            <Card.Body>
                <Card.Title>
                    <h3>Quick links</h3>
                </Card.Title>
                <Card.Subtitle>
                    <hr className="bg-primary" />
                </Card.Subtitle>
                <ListGroup id="quick-list" variant="flush" style={{overflowY: "scroll", height: 200}}>
                    {
                        quickLinks.map((links, idx) => (
                            <ListGroup.Item className="shadow" as={Link} action key={idx} href={links.url}>
                                {links.title}
                            </ListGroup.Item>
                        ))
                    }

                </ListGroup>
            </Card.Body>
            <style jsx>{`                        
                        hr { 
                            width: 25%;
                            height: 5px;
                            opacity: 1;
                            border: none;
                        }
                    `}
            </style>
        </Card>
    )
}