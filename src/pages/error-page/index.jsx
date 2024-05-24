import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-semibold font-mono'>
        404 please go back .................
      </h1>
      <Link to="/" className='px-4 py-3 bg-blue-400 rounded-sm'>Home</Link>
    </div>
  )
}
