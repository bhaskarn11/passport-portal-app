import React from 'react'
import { Container } from "@/bootstrap";
import PassportApplication from './PassportApplication';
import PoliceClearanceForm from './PoliceClearanceForm';
import IdentityCertForm from './IdentityCertForm';
import LoCForm from './LoCForm';


const RenderApplications = (slug) => {
  switch (slug) {
    case "passport-application":

      return <PassportApplication />

    
    case "police-clearance-certificate":
      return <PoliceClearanceForm />

    case "identity-certificate":
      return <IdentityCertForm />

    case "loc-permit":
      return <LoCForm />

    default:
      return (
        <Container className='text-center py-4'>
          <h4>Sorry the application does not existes</h4>
        </Container>
      )

  }
}


function ApplicationIndex({ params }) {

  const appSlug = params.appSlug



  return (
    <Container className='py-3'>
      {
        RenderApplications(appSlug)
      }
    </Container>
  )
}

export default ApplicationIndex