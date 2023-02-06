
import React from 'react'
import styled from 'styled-components'
//import Badge from './Badge'
//import addis from '../assets/addis.png'
import addis from '../assets/images/addis.png'
import{AiOutlineUserAdd} from 'react-icons/ai';
import {RiFileCopyLine} from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import {AiOutlinePieChart} from 'react-icons/ai';



const Sidebar = () => {
  return (
    <Container>
    <ProfileContainer>
        <Avatar src={addis}/>
        <Name> Addis Software</Name>
        {/* <Badge content="addis software"/> */}
    </ProfileContainer>
    <LinksContainer>
    <Links>
    <Link to="AddContact">{<AiOutlineUserAdd/>}
    apply employee
    </Link>
    <Link to='EditContact'>
    <RiFileCopyLine/>Edit employee 
    </Link>
    <Link><a href='https://addissoftware.com/about/' target="_blank" rel="noreferrer">{<FaWallet/>}about addissoftware</a>
    </Link>
    <Link><a href='https://andargworku.vercel.app/' target="_blank" rel="noreferrer">
    {<AiOutlinePieChart/>}
     Portfolios</a>
    </Link>
    </Links>
    <ContactContainer>
        
        <Link><a href='https://mail.google.com/mail/u/0/#inbox' >Contact us </a></Link>
    </ContactContainer>
    </LinksContainer>
  
</Container>
)
};
//every code in software programing id danger you c
const Container=styled.div`
width:18%;
height:100% !important;
border-radius:2rem;
background-color:#091322;
display:flex;
flex-direction:column;
align-items:center;
gap:3rem;

`;

const ProfileContainer=styled.div`

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;
const Avatar=styled.img`
height:7rem;
border-radius:6rem;
margin-top:20%
`;
const Name=styled.h1`
color:white;
font-size:1.5rem;
font-weight:400;
margin:0.8rem 0 0.5rem 0;
`;
const LinksContainer=styled.div`

height:100%;
width:100%;
border-radius:2rem;

`;
const Links=styled.ul`
list-style-type:none;
display:flex;
flex-direction: column;
padding-top:1rem;
height:70%;
a{ 
    font-size:1.1rem;
    color:white;
    text-decoration:none;
    }
`;
const Link=styled.li`
margin-left:10%;
margin-bottom:2rem;
display: flex;
gap:1em;
color:#e4e4e4;
cursor:pointer;
h3{
font-weight:300;
}
svg{
font-size:1.1rem;
margin-top:3%;
}
a{ 
    font-size:1.1rem;
    color:white;
    text-decoration:none;
    }
`;
const ContactContainer=styled.div`
width:60%;
background-color:#091322;
color:#c4c4c4;
height:15%;
margin:auto auto;
border-radius:1rem;
display:flex;
flex-direction:column;
padding:1rem;
a{ 
color:white;
text-decoration:none;
}
`


export default Sidebar

      
    
 
