"use client";
import React from 'react'
import Link from 'next/link'
import Logo from 'public/assets/shared/desktop/logo-nav.svg'
import Image from 'next/image'
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [opened,{toggle}] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open Navigation'
  return (
    <div className='grid grid-flow-col md:px-[40px] px-[165px] py-[28px]  justify-between items-center'>
        <Image src={Logo} alt="Logo" /> 

        <nav className='flex  gap-[37px] sm:hidden'>
            <Link href={"/stories"} className='hover:text-gray-300'>STORIES</Link>
            <Link href={"/features"} className='hover:text-gray-300'>FEATURES</Link>
            <Link href={"/pricing"} className='hover:text-gray-300'>PRICING</Link>
        </nav>

        <button className='nav-btn sm:hidden hover:text-black hover:bg-gray-300'>GET AN INVITE</button>
        <Burger opened={opened} onClick={toggle} aria-label={label} className='hidden sm:flex relative top-2.5'/>    

        {/* Mobile Navbar */}

      {opened ? (
           <motion.div
           initial={{ scale: 0, opacity: 1, x: '-50%', y: '-50%' }}
           animate={{ scale: 1, opacity: 1 }}
           className='w-[1000vw] flex flex-col justify-between items-center fixed top-[225px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75
        rounded-lg bg-white py-[32px]'
         >
            <nav className='flex items-center flex-col justify-center gap-[20px] text-xl '>
            <Link href={"/stories"} className='hover:text-gray-300'>STORIES</Link>
            <Link href={"/features"} className='hover:text-gray-300'>FEATURES</Link>
            <Link href={"/pricing"} className='hover:text-gray-300'>PRICING</Link>
              <hr />
              <button className='bg-black text-white w-[310px] h-[48px] '>GET AN INVITE</button>
            </nav>
 
 
         </motion.div>
      ):null}
      
    </div>
  )
}

export default Navbar