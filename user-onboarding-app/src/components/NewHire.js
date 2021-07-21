import React from 'react'

export default function NewHire({ details }) {
  if (!details) {
    return <h3>Working fetching your new hire&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Terms of Service: {details.terms}</p>
    </div>
  )
}
