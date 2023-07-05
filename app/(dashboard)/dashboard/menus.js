import { faCertificate, faPenToSquare, faCalendarCheck, faPassport } from "@fortawesome/free-solid-svg-icons";

const menus = [
    {
        "title": "View Submitted Applications",
        "href": "/dashboard/applications",
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
                "title": "New/Reissue Passport",
                "href": "/applications/passport-application"
            },
            {
                "title": "Diplomatic/Official Pasport",
                "href": "/applications/diplomatic-official-passport"
            }
        ]
    },
    {
        "title": "Certificates and Permits",
        "href": "#",
        "menuIcon": faCertificate,
        "subMenus": [
            {
                "title": "Police Clearance Certificate (PCC)",
                "href": "/applications/police-clearance-certificate"
            },
            {
                "title": "Identity Certificates",
                "href": "/applications/identity-certificate"
            },
            {
                "title": "LoC Permit",
                "href": "/applications/loc-permit"
            },
            {
                "title": "Background Verification Certificate (GEP)",
                "href": "/applications/background-verification-cert-gep"
            },
            {
                "title": "Surrender Certificate",
                "href": "/applications/surrender-verificate"
            }
        ]
    }
]

export default menus