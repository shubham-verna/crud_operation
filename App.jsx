import React from 'react'
import Homecrud from './Component/Homecrud'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import CreateUser from './Component/CreateUser'
import Users from "./Component/Users"
import EditUser from './Component/EditUser'
const App=()=> {
  return (
	<>
	  <BrowserRouter>
	   <Homecrud/>
          <Routes>
			<Route path='/'      element={<CreateUser/>}/>
			<Route path='/users' element={<Users/>}/>
			<Route path='/edit/:index' element={<EditUser/>}/>
			
		  </Routes>
	  </BrowserRouter>
			
	</>
  )
}

export default App