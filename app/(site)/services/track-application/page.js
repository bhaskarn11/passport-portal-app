import React from 'react'
import { Button, Container, FormControl, FormGroup, FormLabel, Stack } from '@/bootstrap'
import AppStatusMenuWidget from './AppStatusMenuWidget'
import menus from './menus.json'


const renderMenus = (searchParams) => {
  let appType = searchParams['appType']
  let l
  if (appType) {
    l = menus.find((v) => v.code === searchParams['appType'])

  } else {
    l = menus[0]
  }

  return (
    l.subMenus.map((menu, idx) => (
      <FormGroup key={idx}>
        <FormLabel>{menu.label}</FormLabel>
        <FormControl name={menu.name} type={menu.type} />
      </FormGroup>
    ))
  )
}


function ApplicationTrackPage({ searchParams }) {


  return (
    <Container className='py-4'>
      <Stack gap={3}>
        <AppStatusMenuWidget appType={searchParams['appType']} />
        {
          renderMenus(searchParams)
        }

        <Button variant='warning'>Track Application</Button>
      </Stack>

    </Container>
  )
}

export default ApplicationTrackPage