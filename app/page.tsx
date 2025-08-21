import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import Guest from '@/components/Guest'

export default async function HomePage() {
    const user = await currentUser();

    if (!user) {
        return <Guest />

    return (
        <div className='text-red-600 dark:text-red-300'>
            HomePage
        </div>
    )
}}
