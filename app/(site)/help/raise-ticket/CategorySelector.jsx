'use client'

import React from 'react'
import issueCategories from './issueCategories.json'
import { FormGroup, FormLabel, FormSelect, Stack } from "@/bootstrap";

function CategorySelector() {
    const [cat, setCat] = React.useState(0)

    return (
        <FormGroup>
            <FormLabel>Issue Category</FormLabel>
            <FormSelect onChange={(e) => setCat(e.target.value)} className='mb-3'>
                {
                    issueCategories.map((c, idx) => (
                        <option key={idx} value={idx}>{c.category}</option>
                    ))
                }
            </FormSelect>

            {
                issueCategories[cat] ? <FormSelect>
                    {
                        issueCategories[cat].subCategory.map((subC, idx) => (
                            <option key={idx} value={idx}>{subC}</option>
                        ))
                    }
                </FormSelect> : ""
            }

        </FormGroup>
    )
}

export default CategorySelector