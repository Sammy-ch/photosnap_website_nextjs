"use client"


import arrow from 'public/assets/shared/desktop/arrow.svg'
import Image from 'next/image'

const CTA = () => {
  return (
    <div className='CTA sm:gap-[24px] px-[165px] xl:px-[40px] gap-[300px] md:gap-[40px] '>
        <p className='pt-[68px] pb-[68px] sm:pb-[0]'>
            WE'RE IN BETA. GET YOUR INVITE TODAY!
        </p>

          
        <div className='flex flex-row gap-[16px] hover:underline justify-end'>
                <button className='text-xs'><b>GET AN INVITE</b></button>
                <Image src={arrow} />
        </div>
    </div>
  )
}

export default CTA;