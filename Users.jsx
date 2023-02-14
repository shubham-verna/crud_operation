import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./home.module.css"
 const Users = () => {
	const [data, setdata] = useState([])
	 useEffect(() => {
		axios.get("http://localhost:3000/content")
		.then((response)=>{
		 console.log(response)
		 setdata(response.data)
		})
	 }, [data])
	 const deletehandle=(index)=>{
		   axios.delete(`http://localhost:3000/content/${index}`)
		   window.location.assign("/")
	 }
	 return (
		  <>
		 {data.map((x)=>{
		   return(
			 <div id={style.users}>
				  <section className={style.card}>
						<table>
						<tr>
						 <th colSpan="2"><h2>Employee: {x.id}</h2></th>
						</tr>
						 <tr>
						   <td> Full Name:</td>
						   <td>{x.fullname}</td>
						 </tr>
						 <tr>
							<td>Salary</td>
							<td>{x.salary}</td>
						 </tr>
						 <tr>
							<td>Company</td>
							<td>{x.company}</td>
						 </tr>
						 <tr>
							<td><button className={style.btn}><NavLink to={`/edit/${x.id}`}>Edit</NavLink></button></td>
							<td><button className={style.btn} onClick={()=>{deletehandle(x.id)}}>Delete</button></td>
						 </tr>
						</table>
				  </section>
			 </div>
		   )
		 })}
		 </>
	 )
   }
   export default Users