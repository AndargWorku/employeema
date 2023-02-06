import React, {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import styled from "styled-components"
import {toast} from "react-toastify"
import{useNavigate} from "react-router-dom";
const AddContact = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[phoneNumber,setPhoneNumber]=useState('');
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[height,setHeight]=useState("");
    

   const contacts=useSelector((state)=>state);
   const dispatch=useDispatch();
   const navigate = useNavigate();
   console.log(contacts);

   const handleSubmit=(e)=>{
    e.preventDefault();
    const checkEmail=contacts.find(
        (contact)=>contact.email===email&&contact
    );
    const checkNumber=contacts.find(
        (contact)=>contact.number===parseInt(phoneNumber)
    );
    if(!email||!firstName||!phoneNumber||!lastName||!age||!gender||!height){
        return toast.warning("fill all fields");
    }
    if(checkEmail){
        return toast.error('this email is already exist');
    }
    if(checkNumber){
        return toast.error('this number is already exist');
    }
    const data={
        id:contacts[contacts.length-1].id+1,
        email,
        firstName,
        lastName,
        phoneNumber,
        gender,
        age,
        height,

    }
    dispatch({type:"ADD_CONTACT", payload:data})
    toast.success("applicant add successfully");
    navigate("/");
   };
  return (
    <Container>
      
      <Row>
        <h1>
          Add Contact
        </h1>
        <You>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" placeholder="FirstName" className="form-control"
                 value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="LastName" className="form-control"
                 value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="age" className="form-control"
                value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Gender" className="form-control"
                 value={gender} onChange={(e)=>setGender(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="phoneNumber" className="form-control"
                value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>
            
            <div className="form-group">
                <input type="email" placeholder="email" className="form-control"
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            
            
            <div className="form-group">
                <input type="number" placeholder="height" className="form-control"
                value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="submit"  value="add applicant" className="btn btn -block btn-dark"/>
            </div>


          </form>
        </You>
      </Row>
      
    </Container>

  )
}
const Container=styled.div`
margin-top:-37rem;

background-color:#091322;
border-radius:2rem;
width:70%;
height:100%;
margin-left:20%;
text-aligns-center;
margin-top:2;
padding:0;
display:flex;
justify-center:space-between;

`;
const Row=styled.div`

width:55rem;
display:flex;
padding:20px;
h1{
  margin:auto;
  align-items:center;
  font-size:1.5rem;
  color:#fff;


}

`;
const You=styled.div`
background-color:white;
width:70%;


input{
  margin-top:1rem;
  width:35rem;
  height:50px;
}

`


export default AddContact
