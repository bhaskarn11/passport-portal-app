import React from 'react'

export const metadata = {
  title: "Passport Seva CMS"
}

function RootLayout({children}) {
  return (
    <body style={{margin:  0}}>
      {children}
    </body>    
  )
}

export default RootLayout