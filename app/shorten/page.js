"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const generate = async () => {
        setError("")
        setGenerated("")
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, shorturl })
            })

            let result
            try {
                result = await response.json()
            } catch {
                throw new Error(`The server returned an invalid response (HTTP ${response.status}).`)
            }

            if (!response.ok || !result.success) {
                throw new Error(result.message || `Request failed (HTTP ${response.status}).`)
            }

            setGenerated(`${process.env.NEXT_PUBLIC_HOST || window.location.origin}/${shorturl}`)
            seturl("")
            setshorturl("")
        } catch (error) {
            setError(error instanceof Error ? error.message : "Could not generate the short URL.")
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <div className='mx-auto max-w-5xl bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-lg'>Generate your short URLs</h1>

            <div className='flex flex-col gap-2'>
                <input
                    className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white'
                    type="text"
                    value={url}
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} />

                <input
                    className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white'
                    type="text"
                    value={shorturl}
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} />

                <button onClick={generate} disabled={isSubmitting} className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white my-3 disabled:opacity-50'>
                    {isSubmitting ? "Generating..." : "Generate"}
                </button>
            </div>

            {error && <p role="alert" className='text-red-700'>{error}</p>}

            {generated && <>
                <span className='font-bold text-lg'>Your link </span><code><Link target="_blank" href={generated}>{generated}</Link>
            </code></>}
        </div>
    )
}

export default Shorten
