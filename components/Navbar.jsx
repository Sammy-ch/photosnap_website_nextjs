"use client";
import React from 'react'
import Link from 'next/link'
import Logo from 'public/assets/shared/desktop/logo-nav.svg'
import Image from 'next/image'
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';


const Navbar = () => {
  const [opened,{toggle}] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open Navigation'



  return (
    <div className='grid grid-flow-col md:px-[40px] px-[165px] py-[28px]  justify-between items-center'>
        <Image src={Logo} alt="Logo"  /> 

        <nav className='flex gap-[37px] sm:hidden'>
            <Link href={"/stories"}>STORIES</Link>
            <Link href={"/features"}>FEATURES</Link>
            <Link href={"/pricing"}>PRICING</Link>
        </nav>

        <button className='nav-btn sm:hidden'>GET AN INVITE</button>
        <Burger opened={opened} onClick={toggle} aria-label={label} className='hidden sm:flex relative top-2.5'/>    
    </div>
  )
}

export default Navbar