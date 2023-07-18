import React from 'react'
import '@/app/globals.scss'
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Poppins } from "next/font/google";


config.autoAddCss = false

const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400','500'],
})

function RootLayout({ children }) {
    return (
        <html lang='en' style={poppins.style}>
            
                {children}
            
        </html>
    )
}

export default RootLayout