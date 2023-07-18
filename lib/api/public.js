import {ApiClient} from './client'

class PublicService extends ApiClient {
    constructor() {
        super()

        this.client.defaults.baseURL = this.baseURL + "/public"
    }

    async getAppointementSlots(rpo, limit=20) {
        try {
            let url = new URL(this.client.defaults.baseURL+"/appointments/availability")
            url.searchParams.append("rpo_name", rpo)
            const res = await this.client.get(url.toString())

            if (res.status != 200) {
                throw new Error("Something happend!")
            }

            return res.data
        } catch (error) {
            throw error
        }
    }

    async getPspOffices(rpo) {
        try {
            let url = new URL(this.client.defaults.baseURL + "/availability")
            url.searchParams.append("rpo_name", rpo)
            const res = await this.client.get(url.toString())

            if (res.status != 200) {
                throw new Error("Something happend!")
            }

            return res.data
        } catch (error) {
            throw error
        }
    }

}


export default PublicService