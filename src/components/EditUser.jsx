import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function EditUser() {
  return (
    <div>
             <Form className=''>

<Form.Label className='mx-2'>Name</Form.Label>
<Form.Control className='mx-277'width="30px"  type="text" placeholder="Enter name"/>

<Button className='mx-2 my-3 btn-secondary'>Edit User </Button>
<NavLink to='/'><Button className='mx-2 my-2 btn-secondary'>Cancel</Button></NavLink>
</Form>
    </div>
  )
}

export default EditUser