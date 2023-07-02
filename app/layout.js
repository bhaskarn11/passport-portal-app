import React from 'react'
import '@/app/globals.scss'
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

function RootLayout({ children }) {
    return (
        <html lang='en'>
            
                {children}
            
        </html>
    )
}

export default RootLayout