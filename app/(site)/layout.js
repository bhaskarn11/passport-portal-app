import { Container } from '@/bootstrap'
import Footer from '../components/Footer'
import MainNav from '../components/MainNav'
import AuthProvider from '@/lib/context/AuthProvider'

export const metadata = {
  title: {
    default: 'Passport Seva, Ministry of External Affairs, GoI',
    template: "%s  | Passport Seva, Ministry of External Affairs, GoI"
  },
  description: "Passport Seva Online Portal has been designed to deliver Passport and related services to citizens in a timely, transparent, more accessible, reliable manner and in a comfortable environment through streamlined processes and committed, trained and motivated workforce.",
  keywords: "passport india,apply passport in india,passport,fresh passport,apply passport,indian passport,apply passport for india,reissue passport, pcc,police clearance certificate,pcc form,apply for pcc,apply for ic,background verification for gep,diplomaticpassport,official passport,ic,identity certificate,sc,surrender certificate,loc permit,passport appointment,apply for passport appointment,online passport form apply,online apply pcc form,online register for passport,passport register,passport registration,passport login,existing user login passport,new user registration passport"

}

export default function PublicLayout({ children }) {
  return (
    <body>
      <AuthProvider>
        <MainNav />
        <main>
          <Container fluid>
            {children}
          </Container>
        </main>

        <Footer />
      </AuthProvider>

    </body>
  )
}
