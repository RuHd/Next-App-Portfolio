import React from 'react'
import { useEffect, useState } from 'react'
const Footer = () => {
    const [year, setyear] = useState("")
    useEffect(() => {
        const date = new Date()
        setyear(date.getFullYear() + "")
    }, [])
    return (
        <footer>
            <h3>RUANDEV</h3>
            <span>{year}</span>
        </footer>
    )
}

export default Footer
