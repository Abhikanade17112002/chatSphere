import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    

   
      < Container>
    <header class=" header d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
    <div id="headerLogo">
      <a href="/" class="nav-link">
        
       
        <img src="https://app.logo.com/view/logo_493c4326-507d-4d0e-963a-5a4893ce3730" className="" alt="" />
        
      </a>
      </div>

      
      

        <ul className='nav nav-pills'>
            {navItems.map((item) => 
            item.active ? (
              <li
              class="nav-item nav-link"
              
              key={item.name}>
                <button className='btn btn-primary'
                onClick={() => navigate(item.slug)}
                
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li class="nav-item nav-link">
                <LogoutBtn />
              </li>
            )}
          </ul>
     
    </header>
    </Container>

 
  )
}

export default Header
