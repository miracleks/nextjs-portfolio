import React from 'react'
import Navbar from './Nabvar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}
