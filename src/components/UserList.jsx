import React from 'react'
import {Button,Container,Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

function UserList() {
  return (
      <div className='my-5 mx-5'>

    <div className='my-5 mx-5'>
                <Navbar bg="info" variant='outline-dark' className='my-5 mx-5'>
    <Container>
    <Navbar.Brand >User one</Navbar.Brand>
    <Nav className="">
        <NavLink to='/edit/:id'><Button variant="warning" className=' mx-5   my-3'>Edit User</Button></NavLink>
        <NavLink to='/edit/:id'><Button variant="danger" className=' my-3  '>delete</Button></NavLink>
    </Nav>
    </Container>
  </Navbar>
    </div>
      </div>
  )
}

export default UserList