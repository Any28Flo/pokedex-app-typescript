import React, {Fragment, useState} from "react"

import 'react-bulma-components/dist/react-bulma-components.min.css';
const initState ={
    email:'',
    avatar:'',
    password :'',
    name : ''
}
type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.FormEvent<HTMLInputElement>;
const Registration = () =>{

    const [newUser, setNewUser] = useState(initState);

   const  handleChange = ( e : InputElement) => {
       setNewUser({ ...newUser, [e.currentTarget.name]: e.currentTarget.value })
   }
   const  onSubmit = (e : FormElement) =>{
       e.preventDefault()
       console.log(newUser);
   }

    return(
        <Fragment>
            <form  onSubmit={onSubmit}>
                <label htmlFor="userName">User name</label>
                <input type="text" value={newUser.name} onChange={handleChange} name="name"/>
                <label htmlFor="userName">Email:</label>
                <input type="email" value={newUser.email} onChange={handleChange} name="email"/>
                <label htmlFor="userName">Password:</label>
                <input type="password" value={newUser.password} onChange={handleChange} name="password"/>
                <label htmlFor="userName">Avatar:</label>
                <input
                    name= "avatar"
                    value={newUser.avatar}
                    type="file"
                    onChange={handleChange} />
                <button type="submit" >Enviar</button>
            </form>
        </Fragment>
    )
}
export default Registration;