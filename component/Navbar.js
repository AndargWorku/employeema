import React from 'react'
import styled from "styled-components";
// import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className="navbar-brand ml-5">Addis software employment managment system </Link>
      
    </Nav>
  )
}
const Nav=styled.div`
padding-top:0 2rem;
background-color:#091322;
color:#c4c4c4;
`;
const Link=styled.div`
color:white;
text-aligns-center;
padding:0;
margin:auto;
font-size:1.5rem;
font-weight:400;

`


export default Navbar
