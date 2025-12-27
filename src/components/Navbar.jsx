import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        {/* <li><Link href='/profile/sumit/developer/189000'>Profie</Link></li> */}
        <li><Link href='/profile/sumit'>Profie</Link></li>
        <li><Link href='/profile/sumit/developer'>Profie</Link></li>
        <li><Link href='/profile/sumit/developer/189000'>Profie</Link></li>
        <li><Link href='/contactus?name=Sumit Dutt&dsg=Developer&salary=189000'>Contact US</Link></li>
    </ul>
    </>
  )
}
