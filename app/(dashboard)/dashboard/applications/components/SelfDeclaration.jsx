import React from 'react'
import { Form, FormGroup, Stack } from 'react-bootstrap'
import { useFormContext } from "react-hook-form";
import MultistepFormNavigator from './MultistepFormNavigator';
import { useStepper } from './StepperContext';
import dayjs from 'dayjs';
import { selfDeclarations } from "@/data/self-declaration-questions";


function SelfDeclaration() {

    const { register, trigger, formState: { errors } } = useFormContext()

    const [agree, setAgree] = React.useState(true)
    const { nextStep } = useStepper()

    const handleNextStep = async () => {
        let valid = await trigger(['selfDeclarations.place'])
        if (valid){
            nextStep()
        }
    }

    return (
        <Stack gap={2} className='pt-4'>
            {
                selfDeclarations.map((t, i) => (
                    <div key={i}>
                        <h6>{i + 1}. {t.title}</h6>
                        {
                            t.questions.map((q, j) => (
                                <Form.Check reverse key={j} {...register(`selfDeclarations.questions.${i}${j}`)} label={q} id={`question-${i}${j + 1}`} />
                            ))
                        }
                    </div>
                ))
            }
            <Stack gap={3}>
                <p className='bg-light'>
                    <strong>
                        The selected documents (not shared through DigiLocker®) need to be submitted at PSK/Passport Office for verification
                    </strong>
                </p>
                <FormGroup>
                    <Form.Label>Proof of birth: </Form.Label>
                    <Form.Select {...register("selfDeclarations.proofOfBirth")}>
                        {
                            birthProofDocs.map((d, i) => (
                                <option value={d} key={i}>{d}</option>
                            ))
                        }
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Proof of Residential Address: </Form.Label>
                    <Form.Select {...register("selfDeclarations.proofOfResidence")}>
                        {
                            addressProofDocs.map((d, i) => (
                                <option value={d} key={i}>{d}</option>
                            ))
                        }
                    </Form.Select>
                </FormGroup>
            </Stack>
            <strong>Please read the declaration carefully</strong>
            <p className='text-muted'>
                I owe allegiance to the sovereignty, unity & integrity of India, and have not voluntarily acquired citizenship or travel document of any other country. I have not lost, surrendered or been deprived of the citizenship of India.
                I have not contravened any of the conditions relating to the possession and use of an Indian passport
                I affirm that the information and particulars given by me in this form are true and correct I further state that I am not suppressing any material information in this regard further affirm that the enclosures and documentary proof submitted in support of my application for an Indian passport are authentic and solely pertain to me
                and I am fully responsible for the accuracy of the same I am liable to be penalized or prosecuted if found otherwise I am aware that under the Passports Act, 1967 it is a criminal offence to furnish any false information or to suppress any material Information with a view to obtaining passport or travel document
                I have read and understood the contents of the above and by submitting this form certify that all the information submitted by me in the form is bonafide
            </p>
            <Stack gap={4} direction='horizontal'>
                <FormGroup>
                    <Form.Label>Place:</Form.Label>
                    <Form.Control isInvalid={errors.selfDeclarations?.place}
                        {...register("selfDeclarations.place", { required: true })}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type='date' defaultValue={dayjs().format("YYYY-MM-DD")} disabled {...register("selfDeclarations.date")} />
                </FormGroup>
            </Stack>
            <Form.Check onChange={(e) => setAgree(e.target.checked)} checked={agree} name='agree' id='declaration-agree-check' label="I Agree" />
            <MultistepFormNavigator handleNextStep={handleNextStep} />
        </Stack>
    )
}

export default SelfDeclaration


const birthProofDocs = [
    'Aadhar Card/E-Adhaar',
    'Voter Id Card',
    'Birth Certificate'
]

const addressProofDocs = [
    'Aadhaar Card/E-Aadhaar',
    'Voter Id Card',
    'Driving Lisense'
]

const sdq = [
    {
        title: "Provide the following details if there are any criminal proceedings pending against the applicant.",
        questions: [
            "Are any proceedings in respect of an offence alleged to have been committed by you pending before a criminal court in India?",
            "Has any warrant or summons for your appearance been issued & pending before a court under any law for the time being in force?",
            "Has a warrant for your arrest been issued by a court under any law for the time being in force?\" Has an order prohibiting your departure from India been made by any court?"

        ]
    },
    {
        title: "Provide the following details if the applicant has been convicted by a court in India.",
        questions: [
            "Have you at any time during the period of five years immediately preceding the date of this application been convicted by a court in India for offence involving moral turpitude and sentenced in respect thereof to imprisonment for not less than two years?"
        ]
    },
    {
        title: "Provide the following details it the applicant has been refused/denied passport.",
        questions: [
            "Have you ever been refused/denied passport?",
            "Has your passport ever been impounded?",
            "Has your passport ever been revoked?",

        ]
    },
    {
        title: "Provide the following details it applicant has applied for or been granted foreign citizenship.",
        questions: [
            "Have you ever been granted citizenship by any other country?",
            "Have you ever held the passport of any other country at any time",
            "Have you ever surrendered your Indian passport?",
            "Have you ever applied for renunciation of Indian citizenship?"
        ]
    },
    {
        title: "Provide the following details if applicant has returned to India on Emergency Certificate.",
        questions: [
            "Have you ever returned to India on Emergency Certificate (EC)",
            "Have you ever been deported from any region/country?",
            'Have you ever been repatriated from any country back to India?'
        ]
    }
] 