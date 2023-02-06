import React from 'react'
import styled from "styled-components"
import {toast} from "react-toastify"
import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {Link,useParams,useNavigate} from "react-router-dom"

const EditContact = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[phoneNumber,setPhoneNumber]=useState('');
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[height,setHeight]=useState("");
const {id}=useParams();
const contacts=useSelector(state=>state);
const dispatch=useDispatch();
const navigate=useNavigate();
const currentContact=contacts.find(contact=>contact.id===parseInt(id));

useEffect(()=>{
    if(currentContact){
        setFirstName(currentContact.firstName);
        setLastName(currentContact.lastName);
        setEmail(currentContact.email);
        setPhoneNumber(currentContact.number);
        setAge(currentContact.age);
        setGender(currentContact.gender);
        setHeight(currentContact.height);

    }
   
},[currentContact]);
const handleSubmit=(e)=>{
    e.preventDefault();
    const checkEmail=contacts.find(
        (contact)=>contact.id!==parseInt(id)&& contact.email===email
    );
    const checkNumber=contacts.find(
        (contact)=>contact.id!==parseInt(id)&&contact.number===parseInt(phoneNumber)
    );
    if(!email||!firstName||!lastName||!age||!gender||!phoneNumber||!height){
        return toast.warning("fill all fields");
    }
    if(checkEmail){
        return toast.error('this email is already exist');
    }
    if(checkNumber){
        return toast.error('this number is already exist');
    }
    const data={
        id:parseInt(id),
        email,
        firstName,
        lastName,
        age,
        gender,
        height,
        phoneNumber,
    }
    dispatch({type:"UPDATE_CONTACT", payload:data})
    toast.success("applicant update successfully");
    navigate("/");
   };

  return (
    <Container>
        {
            currentContact ? (
           <>
      <Row>
        <h1>
          Edit Contact information{id}
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
                
                <input type="text" placeholder="gender" className="form-control"
                 value={gender} onChange={(e)=>setGender(e.target.value)}/>
            </div>
            <div className="form-group">
                
                <input type="email" placeholder="email" className="form-control"
                 value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="age" className="form-control"
                 value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="form-group">
                
                <input type="number" placeholder="phoneNumber" className="form-control"
                 value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>
            
            
            <div className="form-group">
                <input type="number" placeholder="height" className="form-control"
                 value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <Button>
                <input type="submit"  value="upgrade applicant" className="btn btn -block btn-dark"/>
                <Link to= "/" className="btn btn-danger ml-3 w-400rem">cancel</Link>
            </Button>


          </form>
        </You>
      </Row>
      </>
           ) : (
            <Hd>
            <h1>
          applicant Contact{id} will not exist
        </h1>
        </Hd>
           )
        }
      
    </Container>

  );
};
const Container=styled.div`
margin-top:-35rem;

background-color:#091322;
border-radius:2rem;
width:80%;
height:100%;
margin-left:20%;
text-aligns-center;
margin-top:2;
padding:0;
display:flex;
justify-center:space-between;

`;
const Button=styled.div`
display:flex;
gap:2rem;
width:80%;

font-size:1.5rem;

`
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
    hover:white;
    box-sizing: border-box;
width: 100%;
border: solid #121212 1px;
padding: 5px;
}

`
const Hd=styled.h1`
text-align:center;
font-size:1.5rem;
justify-content:center;
color:#fff;
`

export default EditContact
