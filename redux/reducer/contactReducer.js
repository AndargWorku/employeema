const initialState=[
    {
        id:0,
        firstName:"andarg ",
        lastName:'Worku',
        age:'23',
        number:"098453674",
        email:"andargworku8240@gmail.com",
        height:""
        
        
    },
    
    {
        id:3,
        firstName:"andarg",
        lastName:'Worku',
        number:"09845367467",
        email:"azemedye240rt@gmail.com",
        gender:"M",
        age:'24',
        height:'1.90'

    },

];
const contactReducer=(state=initialState,action)=>{
    switch (action.type) {
       case "ADD_CONTACT":
       state=[...state,action.payload];
       return state;
       case "UPDATE_CONTACT":
        const updateState=state.map((contact)=>
        contact.id===action.payload.id? action.payload:contact
        );
        state=updateState;
        return state;
        case "DELETE_CONTACT":
            const filterContacts=state.filter(
                contact=>contact.id!==action.payload && contact
            );
            state=filterContacts;
            return state
   
    default:
        return state;
}
};
export default contactReducer;