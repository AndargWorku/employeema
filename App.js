import {ToastContainer} from "react-toastify"
import './App.css';
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import styled from "styled-components"
import Sidebar from "./component/Sidebar"
import {Route,Routes} from "react-router-dom"
import AddContact from "./component/AddContact"
import EditContact from "./component/EditContact"

const App=()=> {
  return (
    //you can every thing the correct way of every body naw
    <Container>
      <ToastContainer/>
      
      <Navbar/>
       <Sidebar/>
       
         
      <Routes>
         <Route exact path="/" element={<Home/>}> 
         </Route> 
        <Route exact path="/add" element={<AddContact/>}>
            
        </Route>
        <Route exact path="/edit/:id" element={<EditContact/>}>
           
        </Route>
        
        

      </Routes>   
     
    </Container>
  );
}
const Container=styled.div`
background-color:#999199;
width:100%;
height:100%;

`

export default App;
