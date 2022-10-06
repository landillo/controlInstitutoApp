

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../auth/pages/LoginPage'
import { AdminStudentsPage } from '../../students/pages/AdminStudentsPage'
import { Footer } from '../../ui/components/Footer'
import { Navbar } from '../../ui/components/Navbar'
import { AboutPage } from '../AboutPage'
import { ContactPage } from '../ContactPage'
import { DashboardPage } from '../DashboardPage'
import { HomePage } from '../HomePage'

export const PagesRouter = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="login" element={ <LoginPage />} />
            <Route path='home' element={ <HomePage /> } />
            <Route path='about' element={ <AboutPage /> } />
            <Route path='contact' element={ <ContactPage /> } />
            <Route path='dashboard' element={ <DashboardPage /> } />
            <Route path='/dashboard/adminstudentspage' element={ <AdminStudentsPage /> } />

            <Route path='/' element={ <Navigate to='home' /> } />

        </Routes>

        <Footer />
    
    
    </>
  )
}
