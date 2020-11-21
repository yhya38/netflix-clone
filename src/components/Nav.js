import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow]=useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                handleShow(true)
            } else { handleShow(false) }
            return () => {
                window.removeEventListener('scroll')
            }
        })
    }, [])

    return (
      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="nav_logo"
          src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=24"
          alt="Netflix Logo"
        />
        <img
          src="https://i.pinimg.com/564x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d--soccer-quotes-lineman.jpg"
          alt="User Logo"
        />
      </div>
    );
}

export default Nav
