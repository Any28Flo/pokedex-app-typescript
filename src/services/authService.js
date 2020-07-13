import axios from "axios"

class AuthService{
    constructor() {
        let service = axios.create({
            baseURL :`http://localhost:3004/api/`,
        });
        this.service = service;
    }
    signin = ( data ) =>{
        console.log(data)
        return this.service.post("/signin" , {data})
            .then(response => response)
    }

}

export  default AuthService