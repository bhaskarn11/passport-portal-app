import {ApiClient} from './client'

class ApplicationService extends ApiClient {
    constructor(accessToken) {
        super(accessToken)
        
        this.client.defaults.baseURL = this.baseURL + "/applications"
    }
    

    async createApplication(data) {
        try {
            const res = await this.client.post("/create", data)

            if (res.status != 200) {
                throw new Error("Something happend!")
            }

            return res.data
        } catch (error) {
            throw error
        }
    }


    async getApplication(arn) {
        try {
            const res = await this.client.get(`/${arn}`)

            
            return res.data
        } catch (error) {
            return null
        }
    }


    async createAppointment(data) {
        try {
            const res = await this.client.post(`/appointment`, data)

            if (res.status != 200) {
                throw new Error("Something happend!")
            }

            return res.data

        } catch (error) {
            throw error
        }
    }


    async rescheduleAppointment(data) {
        try {
            const res = await this.client.patch("/appointment", data)

            if (res.status != 200) {
                throw new Error("Something happend!")
            }

            return res.data
        } catch (error) {
            throw error
        }
    }

    
}


export default ApplicationService
