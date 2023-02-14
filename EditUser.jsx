import React from 'react'
import style from "./home.module.css"
import { useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const EditUser = () => {

	
	
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
	

	
	let {index}=useParams();
	console.log(index);
	let navigate=useNavigate();

	useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
		.then((response)=>{
		 setfullname(response.data.fullname)
		 setsalary(response.data.salary)
		 setcompany(response.data.company)
		
		 })
	},[])
    
	const handletheupdate=()=>{
		let payload={fullname,salary,company}
		axios.put(`http://localhost:3000/content/${index}`,payload)
		
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
			       <td><label>Salary</label></td>
				   <td><input type="text" value={company} onChange={handle_company}></input></td>
				 </tr>
				 <tr>
					<th colSpan="2"><button onClick={handletheupdate}>UPDATE</button></th>
				 </tr>
			</table>
		</form>
			
		</section>
	</>
  )
}
export default EditUser
