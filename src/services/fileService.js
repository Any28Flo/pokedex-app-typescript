import axios from 'axios';

class FileService {
    constructor() {
        let service = axios.create({
            baseURL: `http://localhost:3001/file/`,
        });
        this.service = service;
    }
    handleUpload = ( file) =>{
        console.log(file)
       return this.service.post('/upload', file)
            .then(res => res.data)
           .catch(e => console.log(e))
    }

}
export  default FileService
