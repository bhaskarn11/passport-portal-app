import React from 'react'

function ApplicationIndex({params}) {
  return (
    <div>ApplicationIndex - {params['appSlug']}</div>
  )
}

export default ApplicationIndex