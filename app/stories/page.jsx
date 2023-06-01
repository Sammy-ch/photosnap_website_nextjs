"use client"

import React from 'react'
import arrow from 'public/assets/shared/desktop/arrow.svg'
import Image from "next/image"
import { Grid } from '@mantine/core'
import voyage_img from "public/assets/stories/desktop/18-days-voyage.jpg"
import { Divider } from '@mantine/core';
import moon from "/public/assets/stories/desktop/moon-of-appalacia.jpg";
import { useEffect } from 'react';
import { useState } from 'react'


const Stories = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("./images.json");
      const data = await response.json()
      setData(data.images)
    };

    fetchImages();
},[]);

  return (
    <main className='max-h-full '>

      <section className='stories_banner text-left py-[122px] sm:pt-0 sm:pl-[0px] pl-[112px]'>

          <div className='flex flex-col gap-[24px] sm:pl-[40px] sm:pt-[48px] xs:w-[100%] w-[100%]'>
            <span>LAST MONTH’S FEATURED STORY</span>
            <h1 className='w-[15ch] sm:w-[100%]'>HAZY FULL MOON OF APPALACHIA</h1>
            <div>
              <span>MARCH 2nd 2020  </span>
              <span> by John Appleseed</span>
            </div>
            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
           
            <div className='flex flex-row gap-[16px] align-middle'>
                <button>READ STORY</button>
                <Image src={arrow} />
              </div>
          </div>

          <div className=''>
          <Image src={moon} className='hidden sm:flex w-full h-[317px] object-cover '/>
        </div>

      </section>


      <section className='aws_stories bg-black'>

    
        <Grid gutter={0} >
          {data.map((image,index) => (
            <Grid.Col index={index} sm={12} md={6} lg={3} className='hover:translate-y-[-24px] text-left'>
            <Image src={image} alt={`Image ${index}`} width={500} height={1} className='h-full object-cover'/>
            <div className='flex flex-col text-white relative bottom-40 px-[40px]'>
              <span>April 16th 2020</span>
              <text>The Mountains</text>
              <span className='pb-[16px]'>by John Appleseed</span>
              <Divider color='grey' className='pb-[20px]'/>

              <div className='flex flex-row justify-between'>
                <button>READ STORY</button>
                <Image src={arrow} className='h-[15px]'/>
              </div>
            </div>
          </Grid.Col>
          ))}


        
        
          
      </Grid>
      </section>

    </main>
  )
}

export default Stories;