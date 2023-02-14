import { useState } from 'react';
import React from 'react'
import style from "./home.module.css"
import axios from "axios"
import {useNavigate } from 'react-router-dom';
export const CreateUser=()=>{

	const [fullname, setfullname] = useState("");
	const [salary,setsalary] = useState("")
	const [company,setcompany] = useState("")


	const handle_name=(e)=>{
		setfullname(e.target.value)
	}
	const handle_salary=(e)=>{
		setsalary(e.target.value)
	}
	const handle_company=(e)=>{
		setcompany(e.target.value)
	}

	let navigate=useNavigate()
	
	const btn=(e)=>{
		let payload={fullname,salary,company}
		axios.post("http://localhost:3000/content",payload)
		
	navigate("/users")
		
	}
		
  return (
         <>
		<section id={style.mainform}>
		<form>
		<table>
			     <tr>
					<th colSpan="2"><h1>Employee details</h1></th>
				 </tr>
				<tr>
					<td><label> FullName:</label></td>
					<td><input type="text" required="true" value={fullname} onChange={handle_name}/></td>
				</tr>
				<tr>
				 <td><label>Salary</label></td>
				 <td><input type="number" value={salary} onChange={handle_salary}></input></td>
				</tr>
				<tr>
			     <td><label>Company</label></td>
				 <td><input type="text" value={company} onChange={handle_company}></input></td>
				</tr>
				<tr>
					<th colSpan="2"><button onClick={btn}>Submit</button></th>
				</tr>
			</table>
		</form>
			
		</section>
		</>
  )
}
export default CreateUser

