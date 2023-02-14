import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./home.module.css"
const Homecrud=()=>{


  return (
	<>
		<section id={style.nav}>
		<NavLink to="/">Create-users</NavLink>
		<NavLink to="/users">Users-Details</NavLink>

		</section>
	</>
  )
}

export default Homecrud