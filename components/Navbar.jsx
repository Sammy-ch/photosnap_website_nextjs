import React from 'react'
import Link from 'next/link'
import Logo from 'public/assets/shared/desktop/logo-nav.svg'

import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='grid grid-flow-col px-[165px] py-[28px]  justify-between items-center'>
        <Image src={Logo} alt="Logo"  /> 

        <nav className='flex gap-[37px]'>
            <Link href={"/stories"}>STORIES</Link>
            <Link href={"/features"}>FEATURES</Link>
            <Link href={"/pricing"}>PRICING</Link>
        </nav>

        <button className='nav-btn'>GET AN INVITE</button>
    </div>
  )
}

export default Navbar