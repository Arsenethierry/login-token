import React from 'react'
import { Button, Navbar, NavbarBrand } from 'reactstrap';


export function Navbars() {

    return (
        <Navbar dark color="light">
          <div className="container">
            <div className='row'>
          <div className='col  d-flex flex-row'>
            <NavbarBrand className='text-dark fw-bold' href="/">Atools.</NavbarBrand></div>
            <div className='col d-flex flex-row-reverse'>
            <Button color="warning" size="sm" >Register</Button>{' '}
            <Button color="secondary" size="sm" className='ps-5' >Login</Button></div>
          </div></div>
      </Navbar>

    )
}
