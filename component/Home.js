


import styled from "styled-components"

import React from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {toast} from "react-toastify";
const Home = () => {
  const contacts=useSelector(state=>state);
  const dispatch=useDispatch();

  const deleteContact=(id)=>{
    dispatch({type:"DELETE_CONTACT",payload:id});
    toast.success("contact delete successfully");

  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="add" className="btn btn-outline-dark ">Add Contact</Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Height</th>
                <th scope="col">phoneNumber</th>
                <th scope="col">Action</th>
              </tr>

            </thead>
            <tbody>
              {
                contacts.map((contact,id)=>(
                  <tr key ={id}>
                    <td>{id+1}</td>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.gender}</td>
                    <td>{contact.age}</td>
                    <td>{contact.height}</td>
                    <td>{contact.phoneNumber}</td>
                    
                    <td className='d-flex'>
                      <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                      <button type="button" onClick={()=>deleteContact(contact.id)} className="btn btn-small btn-danger">delete</button>

                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      
    </Container>
  )
}
const Container=styled.div`
display:flex;
background-color:#696969;
margin-top:-30rem;
margin-left:20%;
margin-right:1%;
color:white;
`
export default Home






























// import React from 'react'
// import {Link} from "react-router-dom"
// import styled from "styled-components";
// import {useSelector,useDispatch} from "react-redux"
// import {toast} from "react-toastify";

// const Home = () => {
//   const contacts=useSelector(state=>state);
//   const dispatch=useDispatch();

//   const deleteContact=(id)=>{
//     dispatch({type:"DELETE_CONTACT",payload:id});
//     toast.success("contact delete successfully");

//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <Link to="add">Add Employ</Link>
//         </div>
//         <div>
          
//           <table>
//             <th>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">FirstName</th>
//                 <th scope="col">LastName</th>
//                 <th scope="col">Gender</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Age</th>
//                 <th scope="col">phoneNumber</th>
//                 <th scope="col">Height(meters)</th>
//                 <th scope="col">Action</th>
//               </tr>

//             </th>
//             <tbody>
//               {
//                 contacts.map((contact,id)=>(
//                   <tr key ={id}>
//                     <td>{id+1}</td>
//                     <td>{contact.firstName}</td>
//                     <td>{contact.lastName}</td>
//                     <td>{contact.gender}</td>
//                     <td>{contact.email}</td>
//                     <td>{contact.age}</td>
//                     <td>{contact.number}</td>
//                     <td>{contact.height}</td>
//                     <td>
//                       <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
//                       <button type="button" onClick={()=>deleteContact(contact.id)} className="btn btn-small btn-danger">delete</button>

//                     </td>
//                   </tr>
//                 ))
//               }
//             </tbody>
//           </table>
          
//         </div>
//       </div>
      
//     </div>
//   )
// }
// // const Table = styled.table`
// //   font-family: Arial, Helvetica, sans-serif;
// //   border-collapse: collapse;
// //   width: 100%;
// //   background: transparent;
// // `;
// // const Tr = styled.tr`
// //   display: table-row;
// //   align-items: center;
// //   background: transparent;
// //   &:hover {
// //     background: #ecf0f4;
// //   }
// // `;
// //  const Th= styled.th`
// //   padding: 12px 8px;
// //   text-align: left;
// //   color: white;
// //   border: none;
// //   color: #00000095;
// //   font-weight: 500;
// //   background: transparent;
// //   border-bottom: 1px solid #55555540;
// // `;
// //  const Td = styled.td`
// //   padding: 8px;
// //   font-weight: 300;
// //   font-family: Georgia;
// //   margin-top: 3px;
// //   background: transparent;
// //   border-bottom: 1px solid #55555540;
// // `;


// // export default Home
