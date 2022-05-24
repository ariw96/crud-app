import React from 'react'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import Heading from './Heading'
import UserList from './UserList'


function Home () {
  return (
    <div>
<Heading/>
<UserList/>  
 
    </div>
  )
}

export default Home