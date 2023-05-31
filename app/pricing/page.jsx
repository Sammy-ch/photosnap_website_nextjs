"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import pricing_hero from "/public/assets/pricing/desktop/hero.jpg"
import { Switch } from '@mantine/core';
import check from "public/assets/pricing/desktop/check.svg"
import CTA from '@/components/CTA';

import { useState } from 'react';

const Pricing = () => {

  const [checked, setChecked] = useState(false);

  return (
    <main className='max-h-full'>
        <section className='pricing_banner'>
            <div className="hero text-white px-[112px] sm:px-[30px] sm:py-[72px] py-[173px]">
              <div className='w-[386px] sm:w-full flex'>
                <span className='w-[6px] h-[144px] rectangle translate-x-[-110px] translate-y-2.5'></span>
                <div>
                  <h1 className='pb-[21px]'>PRICING</h1>
                  <p className='pb-[48px]'>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                </div>
              </div>
          </div>

          <Image src={pricing_hero} className='object-cover w-full h-full' />
        </section>


        <section className='pricing-section pt-[120px]'>
                    <section class="pricing">
                    <div className='flex items-center gap-[5px] justify-center mb-[4rem]'>
                      <label htmlFor="">Monthly</label>
                          <Switch color='dark' checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}/>
                        <label htmlFor="">Yearly</label>
                    </div>
                    <div class="plans">
                      <div class="plan">
                        <div class="plan__description">
                          <h2>Basic</h2>
                          <p>Includes basic usage of our platform. Recommended for new and aspiring
                            photographers.</p>
                        </div>
                        <div class="plan__rate">
                          <h1 class="basic-price">$19.00</h1>
                          <p class="time">per month</p>
                        </div>
                        <a class="btn btn--black">Pick Plan</a>
                      </div>
                      <div class="plan plan--pro">
                        <div class="plan__description">
                          <h2>Pro</h2>
                          <p>More advanced features available. Recommended for photography veterans and
                            professionals.</p>
                        </div>
                        <div class="plan__rate">
                          <h1 class="pro-price">$39.00</h1>
                          <p class="time">per month</p>
                        </div>
                        <a class="btn btn--white">Pick Plan</a>
                      </div>
                      <div class="plan">
                        <div class="plan__description">
                          <h2>Business</h2>
                          <p>Additional features available such as more detailed metrics. Recommended
                            for business owners.</p>
                        </div>
                        <div class="plan__rate">
                          <h1 class="business-price">$99.00</h1>
                          <p class="time">per month</p>
                        </div>
                        <a class="btn btn--black">Pick Plan</a>
                      </div>
                    </div>
                  </section>

                <section class="comparison">
                        <h1>Compare</h1>
                        <table class="compare-table">
                          <tr>
                            <th>The Features</th>
                            <th>Basic</th>
                            <th>Pro</th>
                            <th>Business</th>
                          </tr>
                          <tr>
                            <th>Unlimited Story Posting</th>
                            <td><Image src={check} alt="check"/></td>
                            <td><Image src={check} alt="check"/></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                          <tr>
                            <th>Unlimited Photo Upload</th>
                            <td><Image src={check} alt="check"/></td>
                            <td><Image src={check} alt="check"/></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                          <tr>
                            <th>Embedding Custom Content</th>
                            <td></td>
                            <td><Image src={check} alt="check"/></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                          <tr>
                            <th>Customize Metadata</th>
                            <td></td>
                            <td><Image src={check} alt="check"/></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                          <tr>
                            <th>Advanced Metrics</th>
                            <td></td>
                            <td></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                          <tr>
                            <th>Photo Downloads</th>
                            <td></td>
                            <td></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                          <tr>
                            <th>Search Engine Indexing</th>
                            <td></td>
                            <td></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                          <tr>
                            <th>Custom Analytics</th>
                            <td></td>
                            <td></td>
                            <td><Image src={check} alt="check"/></td>
                          </tr>
                        </table>

                          {/* COMPARE TABLE FOR MOBILE */}
                        <table class="compare-table for-mobile">
                          <thead>
                            <tr class="main-title-row">
                              <th scope="col" colspan="3">The Features</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Unlimited Story Posting</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td><Image src={check} alt="check"/></td>
                              <td><Image src={check} alt="check"/></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>

                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Unlimited Photo Upload</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td><Image src={check} alt="check"/></td>
                              <td><Image src={check} alt="check"/></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>

                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Embedding Custom Content</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td></td>
                              <td><Image src={check} alt="check"/></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>

                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Customize Metadata</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td></td>
                              <td><Image src={check} alt="check"/></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>

                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Advanced Metrics</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td></td>
                              <td></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>

                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Photo Downloads</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td></td>
                              <td></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>

                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Search Engine Indexing</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td></td>
                              <td></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>

                            <tr class="feature-title-row">
                              <th scope="col" colspan="3">Custom Analytics</th>
                            </tr>
                            <tr class="plan-titles-row">
                              <th scope="col">Basic</th>
                              <th scope="col">Pro</th>
                              <th scope="col">Business</th>
                            </tr>
                            <tr class="data-row">
                              <td></td>
                              <td></td>
                              <td><Image src={check} alt="check"/></td>
                            </tr>
                          </tbody>
                        </table>
      </section>
     
        </section>
        <CTA/>
    </main>
  )
}

export default Pricing;