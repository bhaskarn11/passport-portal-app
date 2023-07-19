import axios from "axios"

export class ApiClient {
    constructor(accessToken = "") {
        
        this.baseURL = "http://127.0.0.1:8000"
        this.token = `Bearer ${accessToken}`
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization': this.token? this.token : ""
            }
        })
    }
    
}
