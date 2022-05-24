import React from 'react'
import {Button,Nav,Navbar,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

function Heading() {
  return (
    <div className='mx-5 '>
    <div className='mx-5 '>
      <Navbar bg="dark" variant='dark' className='my-5 mx-5'>
    <Container>
    <Navbar.Brand >MY TEAM</Navbar.Brand>
    <Nav className="">
        <NavLink to='/adduser'><Button className=' my-3 '>Add User</Button></NavLink>
    </Nav>
    </Container>
  </Navbar>

    </div>
    </div>

  )
}

export default Heading