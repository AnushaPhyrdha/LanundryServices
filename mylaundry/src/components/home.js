import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer'
import Referal from './referal'
import Footermain from './footermain'
import Header from './header'
import Mainhome from './mainhome'

function home() {
    return (
        <div>
            <Header />
            <Mainhome />
            <Referal />
            <Footermain />
            <Footer />
        </div>
    )
}

export default home
