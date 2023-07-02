import DashNavbar from './dashboard/DashNavbar'


export const metadata = {
    title: {
        default: 'Passport Seva, Ministry of External Affairs, GoI',
        template: "%s  | Passport Seva, Ministry of External Affairs, GoI"
    },
    description: "Passport Seva Online Portal has been designed to deliver Passport and related services to citizens in a timely, transparent, more accessible, reliable manner and in a comfortable environment through streamlined processes and committed, trained and motivated workforce.",

}


export default function PublicLayout({ children }) {
    return (
        <body>
            {/* Header and Navbar will go here */}
            <DashNavbar />
            <main>
                {children}
            </main>
            {/* Footer will go here */}
        </body>
    )
}
