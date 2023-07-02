import { faArrowRight, faPenToSquare, faCalendarCheck, faPassport } from "@fortawesome/free-solid-svg-icons";

const menus = [
    {
        "title": "View Submitted Applications",
        "href": "/dashboard/application",
        "menuIcon": faPenToSquare,
        "subMenus": []
    },
    {
        "title": "Book Appointments",
        "href": "/dashboard/appointment",
        "menuIcon": faCalendarCheck,
        "subMenus": []
    },
    {
        "title": "Passport Services",
        "href": "#",
        "menuIcon": faPassport,
        "subMenus": [
            {
                "title": "New Passport",
                "href": "/application/new-passport"
            },
            {
                "title": "Renew Pasport",
                "href": "/application/renew-passport"
            }
        ]
    },
    {
        "title": "Certificates and Permits",
        "href": "#",
        "menuIcon": "",
        "subMenus": [
            {
                "title": "Police Clearance Certificate (PCC)",
                "href": "/application/police-clearance-certificate"
            },
            {
                "title": "Identity Certificates",
                "href": "/application/identity-certificate"
            },
            {
                "title": "LoC Permit",
                "href": "/application/loc-permit"
            },
            {
                "title": "Background Verification Certificate (GEP)",
                "href": "/application/background-verification-cert-gep"
            }
        ]
    }
]

export default menus