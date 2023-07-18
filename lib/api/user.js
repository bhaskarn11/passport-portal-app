import Cookie from "js-cookie";
import { ApiClient } from "./client"

class UserService extends ApiClient {
    constructor(accessToken) {
        super(accessToken)
        this.client.defaults.baseURL += "/users"

    }


    async loginUser(data) {
        try {
            
            const res = await this.client.post("/login", {
                ...data
            }, {
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                }
            })

            if (res.status != 200) {
                throw new Error("Something happend")
            }
            return res.data
        } catch (error) {
            throw error
        }

    }

    encodeFormData(data) {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
    }

    async createUser(data) {

        const res = await this.client.post("/create", {
            ...data
        })

        if (res.status != 200) {
            throw new Error("Something happend!")
        }

        return res.data

    }

    async getCurrentUserState() {
        try {
            if (this.token != "") {
                
                const res = await this.client.get("/me", {
                    
                    headers: {
                        "Authorization": this.token
                    }
                })

                if (res.status != 200) {
                    throw Error("User not autherized")
                }

                return res.data
            }

        } catch (error) {
            throw error
        }
    }

    async logOut() {
        try {
            Cookie.remove("Token")
        } catch (error) {
            throw error
        }
    }

    async getApplications(userId) {
        const res = await this.client.get(`${userId}/applications`)
        if (res.status == 200) {
            return res.data
        }

        throw new Error("Could not fetch applications")
    }

}

export default UserService
