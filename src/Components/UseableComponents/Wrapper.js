import React from 'react'

export default function Wrapper({ children }) {
    return (
        <div className='bg-red-600 min-h-screen py-32'>{children}</div>
    )
}
