import React, {Fragment, useState} from "react"
import AuthService from "../../services/authService"
import FileService from "../../services/fileService";

const initState ={
    email:'',
    avatarUrl:'',
    password :'',
    name : ''
}

type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.FormEvent<HTMLInputElement>;
type InputImageElement =   React.ChangeEvent<HTMLInputElement>

const Registration = () =>{

    const [newUser, setNewUser] = useState(initState);
    const [filePath , setFilePath]= useState('')
    const authService = new AuthService();
    const  fileService = new FileService()
   const  handleChange = ( e : InputElement) => {
       setNewUser({ ...newUser, [e.currentTarget.name]: e.currentTarget.value })
   }
   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) =>{
        // @ts-ignore
       const file = e.target.files[0]
       const uploadData = new FormData();
       // @ts-ignore
       uploadData.append("imageUrl", file);
       fileService.handleUpload(uploadData)
           .then(response => {
               setFilePath(response)
           })

           .catch(e =>{
               console.log(e)
           })
   }
   const  onSubmit = (e : FormElement) =>{
       e.preventDefault()
       authService.signin(newUser)
           .then(response =>{
               console.log(response)
           })
           .catch( e =>{
               console.log(e)
           })
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
                <label htmlFor="userName" >Avatar:</label>
                <input
                    name= "avatarUrl"
                    value={newUser.avatarUrl}
                    type="file"
                    onChange={   handleFileUpload} />
                <button type="submit" >Enviar</button>
            </form>
        </Fragment>
    )
}
export default Registration;