import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/assets/shared/desktop/logo.svg'
import Facebook_logo from 'public/assets/shared/desktop/facebook.svg'
import Youtube_logo from 'public/assets/shared/desktop/youtube.svg'
import Twitter_logo from 'public/assets/shared/desktop/twitter.svg'
import Pinterest_logo from 'public/assets/shared/desktop/pinterest.svg'
import Instagram_logo from 'public/assets/shared/desktop/instagram.svg'
import arrow from "public/assets/shared/desktop/arrow.svg"


const Footer = () => {
  return (
    <footer className='px-[165px] lg:px-[40px] py-[64px] w-full'>
        <div className='container'>
                <div className='footer_logo fsm:pb-[32px]'>
                    <Image src={Logo} alt='logo' />
                </div>
                        <div className='social_links flex gap-[14px] '>
                            <Link href={"/"}><Image src={Facebook_logo} alt='fb_logo' /></Link>
                            <Link href={"/"}><Image src={Youtube_logo} alt='yt_logo' /></Link>
                            <Link href={"/"}><Image src={Twitter_logo} alt='tw_logo' /></Link>
                            <Link href={"/"}><Image src={Pinterest_logo} alt='pt_logo' /></Link>
                            <Link href={"/"}><Image src={Instagram_logo} alt='Insta_logo' /></Link>
                        </div>
                    <div className="nav_links flex  fsm:pb-10 sm:flex-row fsm:flex-row gap-[20px]">
                        <Link href={"/"}  className='hover:text-gray-700'>HOME</Link>
                        <Link href={"/stories"} className='hover:text-gray-700'>STORIES</Link>
                        <Link href={"/features"} className='hover:text-gray-700'>FEATURES</Link>
                        <Link href={"/pricing"} className='hover:text-gray-700'>PRICING</Link>
                    </div>
                {/* <div className="cpy-invite flex flex-col text-left items-end gap-[86px]"> */}
                    <div className='cpy-invite flex flex-row gap-[16px] hover:underline'><button>GET AN INVITE</button><Image src={arrow} className='h-[16px] relative top-1'/></div>
                    <span className='cpy'>Copyright 2019. All Rights Reserved</span>
                {/* </div> */}
        </div>

    </footer>
  )
}

export default Footer