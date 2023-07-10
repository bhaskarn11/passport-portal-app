export const applications = [
    {
        id: 1,
        arn: "23-8647675",
        type: "passport",
        schemeType: "NORMAL",
        status: "PENDING",
        userId: "8728hbhg72376hjb",
        submitedAt: "05-06-2023",
        name: "New Passport application",
        paymentDetails: null,
        appointmentDetails: null
    },
    {
        id: 2,
        arn: "23-989756",
        type: "PCC",
        submitedAt: "05-06-2023",
        schemeType: "NORMAL",
        status: "SUBMITTED",
        userId: "8728hbhg72376hjb",
        name: "New Passport application",
        paymentDetails: {
            status: "SUCCESS",
            orderId: "order_87473bv372",
            date: "10-07-2023"
        },
        appointmentDetails: {
            id: 1,
            date: "14-07-2023",
            rpo: "Kolkata",
            poCode: "KOL-PO1"
        },
        fee: 1500.00,
    }
]
