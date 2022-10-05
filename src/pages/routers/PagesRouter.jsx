

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from '../../ui/components/Footer'
import { Navbar } from '../../ui/components/Navbar'
import { AboutPage } from '../AboutPage'
import { ContactPage } from '../ContactPage'
import { HomePage } from '../HomePage'

export const PagesRouter = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='home' element={ <HomePage /> } />
            <Route path='about' element={ <AboutPage /> } />
            <Route path='contact' element={ <ContactPage /> } />

            <Route path='/' element={ <Navigate to='home' /> } />

        </Routes>

        <Footer />
    
    
    </>
  )
}
