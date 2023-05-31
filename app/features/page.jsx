"use client";

import React from 'react'
import feature_img from "public/assets/features/desktop/hero.jpg"
import arrow from "public/assets/shared/desktop/arrow.svg"
import Image from 'next/image';
import { Grid } from '@mantine/core';
import responsive from "public/assets/features/desktop/responsive.svg";
import CTA from '@/components/CTA';

const Features = () => {
  return (
    <main className='max-h-full'>
    
      <section className='feature_section'>
          <div className="hero text-white px-[112px] sm:px-[30px] sm:py-[72px] py-[153px]">
              <div className='w-[386px] sm:w-full flex'>
                <span className='w-[6px] h-[144px] translate-y-3 translate-x-[-110px]'></span>
                <div>
                  <h1 className='pb-[21px]'>FEATURES</h1>
                  <p className='pb-[48px]'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>

                </div>
              </div>
          </div>

          <div className="hero_image">
              <Image src={feature_img} alt='hero_image' className='object-cover w-full h-full' />
          </div>

          </section>


          <section>
                <Grid className='py-[160px] sm:py-[64px] fsm:px-[40px] px-[165px] text-center flex gap-y-[104px]'>
                  <Grid.Col md={6} lg={4}>
                      <div className='feature'>
                          <Image src={responsive} alt='' className='pb-[48px]'/>
                          <span className='pb-[16px] font-bold'>100% Responsive</span>
                          <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                        </div>
                  </Grid.Col>

                  <Grid.Col md={6} lg={4}>
                      <div className='feature'>
                          <Image src={responsive} alt='' className='pb-[48px]'/>
                          <span className='pb-[16px] font-bold'>No Photo Upload Limit</span>
                          <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                        </div>
                  </Grid.Col>

                  <Grid.Col md={6} lg={4}>
                      <div className='feature'>
                          <Image src={responsive} alt='' className='pb-[48px]'/>
                          <span className='pb-[16px] font-bold'>Available to Embed</span>
                          <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                        </div>
                  </Grid.Col>

                  <Grid.Col md={6} lg={4}>
                      <div className='feature'>
                          <Image src={responsive} alt='' className='pb-[48px]'/>
                          <span className='pb-[16px] font-bold'>Custom Domain</span>
                          <p>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!.</p>
                        </div>
                  </Grid.Col>

                  <Grid.Col md={6} lg={4}>
                      <div className='feature'>
                          <Image src={responsive} alt='' className='pb-[48px]'/>
                          <span className='pb-[16px] font-bold'>Boost Your Exposure</span>
                          <p>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
                        </div>
                  </Grid.Col>

                  <Grid.Col md={6} lg={4}>
                      <div className='feature'>
                          <Image src={responsive} alt='' className='pb-[48px]'/>
                          <span className='pb-[16px] font-bold'>Drag & Drop Image</span>
                          <p>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
                        </div>
                  </Grid.Col>
                </Grid>
              </section>
          <CTA/>
    </main>
  )
}

export default Features;