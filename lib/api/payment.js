import { ApiClient } from "./client";

class PaymentService extends ApiClient {
    constructor(accessToken) {
        super(accessToken)
        this.baseURL = this.baseURL + "/payment"
    }


    async initiatePayment(payload) {
        try {
            const res = await fetch(this.baseURL+"/init", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Authorization": this.token
                }
            })

            if (!res.ok) {
                throw new Error("Something happend!")
            }

            return await res.json()
        } catch (error) {
            throw error
        }
    }


    async verifyPayment(payload) {
        try {
            const res = await fetch(this.baseURL + "/verify", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Authorization": this.token
                }
            })

            if (!res.ok) {
                throw new Error("Something happend!")
            }

            return await res.json()
            
        } catch (error) {
            throw error
        }
    }

}

export default PaymentService
