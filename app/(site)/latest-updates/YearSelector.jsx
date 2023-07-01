'use client'
import React from 'react'
import { Form } from "react-bootstrap";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
const years = ['2023', '2022', '2021', '2020']

function YearSelector() {

    const router = useRouter()
    const pathname = usePathname()
    const params = useSearchParams()
    return (
        <Form.Select defaultValue={params['y']? params['y'] : years[0]} onChange={e => router.replace(pathname + `?y=${e.target.value}`)} style={{ width: '10%' }}>
            {
                years.map((y, idx) => (
                    <option value={y} key={idx}>{y}</option>

                ))

            }

        </Form.Select>

    )
}

export default YearSelector