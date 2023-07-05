import * as yup from 'yup'



const personalDetailSchema = yup.object().shape({
    firstName: yup.string().required().max(50),
    lastName: yup.string().required().max(50),
    dob: yup.date().required(),
    mobileNumber: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    maritalStatus: yup.string().required(),
    employmentType: yup.string().required(),
    orgName: yup.string(),
    educationLevel: yup.string(),
    visibleMark: yup.string(),
    aadhaarNumber: yup.string()
})


export const addressSchema = yup.object().shape({
    houseStreet: yup.string().required(),
    cityName: yup.string().required(),
    pinCode: yup.string().required().max(6),
    state: yup.string().required(),
    district: yup.string().required(),
    policeStation: yup.string().required()
})


// export const addressFormSchema = yup.object().shape({
//     presentAddress: addressSchema,
   
// })



export const prevPassSchema = yup.object().shape({
    isIdentityCertHeld: yup.bool(),
    isDiplomaticPassHeld: yup.bool(),
    appliedPassBefore: yup.bool()
})


export const appTypeSchema = yup.object().shape({
    applicationType: yup.string().required("Field is required"),
    schemeType: yup.string().required(),
    bookletType: yup.string().required()
})


export const familyDetailsSchema = yup.object().shape({
    fatherName: yup.string().required(),
    motherName: yup.string().required(),
    legalGuardianName: yup.string().required(),
    spouseName: yup.string(),
    emergencyContact: yup.object({
        phoneNumber: yup.string().required()
    })
})


export const applicationFormSchema = yup.object().shape({
    appType: appTypeSchema,
    personalDetails: personalDetailSchema,
    familyDetails: familyDetailsSchema,
    addressDetails: addressSchema,
    prevPspDetails: prevPassSchema,
    //selfDeclarations: yup.array(yup.object())
})

