import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/profile'>Profie</Link></li>
        <li><Link href='/contactus'>Contact US</Link></li>
    </ul>
    </>
  )
}
