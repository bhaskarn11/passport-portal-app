'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from 'react'
import { Pagination } from 'react-bootstrap'





function CustomPagination() {

    const searchParams = useSearchParams()
    let items = []

    const renderPagination = () => {
        let s
        for (let i = 1; i <= 5; i++) {

            s = searchParams.toString()

            items.push(
                <Pagination.Item active={searchParams['page'] === i || i === 1} as={Link} href={`/latest-updates?${s ? s + "&" : ""}page=${i}`} key={i}>
                    {i}
                </Pagination.Item>
            )
        }

        return items
    }

    return (
        <Pagination size="sm">

            {
                renderPagination()
            }
        </Pagination>
    )
}

export default CustomPagination