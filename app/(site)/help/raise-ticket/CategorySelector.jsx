'use client'

import React from 'react'
import issueCategories from './issueCategories.json'
import { FormGroup, FormLabel, FormSelect, Form } from "react-bootstrap";
import { useFormContext } from 'react-hook-form';

function CategorySelector() {
    const [cat, setCat] = React.useState(0)

    const { register } = useFormContext()

    return (
        <FormGroup>
            <FormLabel>Issue Category</FormLabel>
            <FormSelect {...register("issueCategory")} onChange={(e) => setCat(e.target.value)} className='mb-3'>
                {
                    issueCategories.map((c, idx) => (
                        <option key={idx} value={idx}>{c.category}</option>
                    ))
                }
            </FormSelect>

            {
                issueCategories[cat] && (
                    <FormSelect {...register("issueSubCategory")}>
                        {
                            issueCategories[cat].subCategory.map((subC, idx) => (
                                <option key={idx} value={idx}>{subC}</option>
                            ))
                        }
                    </FormSelect>
                )
            }

        </FormGroup>
    )
}

export default CategorySelector