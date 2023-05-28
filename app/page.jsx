import React from 'react';
import Image from 'next/image';
import hero_img from "public/assets/home/desktop/create-and-share.jpg"
import arrow from "public/assets/shared/desktop/arrow.svg"
import bt_stories from "public/assets/home/desktop/beautiful-stories.jpg"
import design_img from "public/assets/home/desktop/designed-for-everyone.jpg"
import mountain from "public/assets/stories/desktop/mountains.jpg";
import sunset_img from "public/assets/stories/desktop/cityscapes.jpg"
import voyage_img from "public/assets/stories/desktop/18-days-voyage.jpg"
import arch_img from "public/assets/stories/desktop/architecturals.jpg"

import embed from "public/assets/features/desktop/embed.svg";
import limit from "public/assets/features/desktop/no-limit.svg";
import responsive from "public/assets/features/desktop/responsive.svg";

const Home = () => {
  return (
   <main className='max-h-full w-full'>

    <section className='hero_section'>
      <div className="hero text-white px-[112px] py-[153px]">
          <div className='w-[386px] flex'>
            <span className='w-[6px] h-[304px] rectangle translate-x-[-110px]'></span>
            <div>
              <h1 className='pb-[21px]'>CREATE AND SHARE YOUR PHOTO STORIES</h1>
              <p className='pb-[48px]'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
              <div className='flex gap-[16px]'><button>GET AN INVITE</button> <Image src={arrow} alt='arrow_btn'/></div>
            </div>
          </div>
      </div>

      <div className="hero_image">
          <Image src={hero_img} alt='hero_image' className='object-cover w-full h-full' />
      </div>
    </section>

    <section className='stories-1'>
        <div>
              <Image src={bt_stories} alt='hero_image' className='object-cover w-full h-full' />
          </div>

          <div className=" px-[112px] py-[153px]">
            <div>
              <h1 className='pb-[21px]'>BEAUTIFUL STORIES EVERY TIME</h1>
              <p className='pb-[48px]'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
              <div className='flex gap-[16px]'><button>VIEW THE STORIES</button> <Image src={arrow} alt='arrow_btn'/></div>
            </div>
      </div>
    </section>

    <section className='stories-2'>
   
          <div className=" px-[112px] py-[153px]">
            <div>
              <h1 className='pb-[21px]'>DESIGNED FOR EVERYONE</h1>
              <p className='pb-[48px]'>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
              <div className='flex gap-[16px]'><button>VIEW THE STORIES</button> <Image src={arrow} alt='arrow_btn'/></div>
            </div>
      </div>


      <div >
              <Image src={design_img} alt='hero_image' className='object-cover w-full h-full' />
          </div>

    </section>


    <section className='story-cards'>
      <div className='card-img hover:translate-y-[-24px]'><Image src={mountain} className='w-full'/></div>
      <div className='card-img'><Image src={sunset_img} className='w-full' /></div>
      <div className='card-img'><Image src={voyage_img} className='w-full'/></div>
      <div className='card-img'><Image src={arch_img} className='w-full'/></div>
    </section>


    <section className='features px-[165px] py-[120px]'>
      <div className='feature'>
        <Image src={responsive} alt='' className='pb-[48px]'/>
        <span className='pb-[16px] font-bold'>100% Responsive</span>
        <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
      </div>

      <div className='feature'>
        <Image src={limit} alt='' className='pb-[48px]'/>
        <span className='pb-[16px] font-bold'>No Photo Upload Limit</span>
        <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
      </div>

      <div className='feature'>
        <Image src={embed} alt='' className='pb-[48px]'/>
        <span className='pb-[16px] font-bold'>Available to Embed</span>
        <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
      </div>

    </section>

   </main>
  )
}

export default Home