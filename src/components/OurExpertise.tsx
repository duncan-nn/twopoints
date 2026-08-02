import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { services } from '@/data/services';


function OurExpertise() {
  return (
    <div className='expertise-container'>
         <div className='expertise'>
             <div className='top'>
                 <div className='left'>
                    <div className='subject-tag'>
                        <span></span><h3 className='tag-text'>Our expertise</h3>
                    </div>
                    <h1 className='text'>
                       Everything You Need to Sell Online with Confidence.
                    </h1>
                 </div>
                  <div className='right'>
                    <p className='right-text'>
                        From custom storefronts and secure payment integrations to AI-powered automation 
                        and analytics, we build digital commerce solutions that scale with your business.
                    </p>
                  </div>
             </div>
              <div className='bottom'>
                <div className="bottom-wrap">
                {services.map((service) => (
                    <Link
                    key={service.id}
                    href={service.href}
                    className="link-item"
                    >
                    <div className="item">
                        <div
                        className="image-div"
                        style={{ backgroundImage: `url('${service.image}')` }}
                        />
                        <span className="service-name">{service.name}</span>
                    </div>
                    </Link>
                ))}
                </div>

              </div>
         </div>
         <div 
        className='testimonial'
        style={{backgroundImage: `url('/images/testimonial.jpg')`}}>
            <div className='inner'>
                <div className='top'>
                    <h1>
                        TwoPoints Studio created something better than I ever
                        could have imagined
                    </h1>
                </div>
                <div className='bottom'>
                    <div className='image-wrap'>
                        <Image 
                        src="/images/ts-square.jpg"
                        className='image'
                        alt="" 
                        fill
                        style={{ objectFit: 'contain' }} // 'cover' or 'contain'
                        />
                    </div>
                    <div className='details'>
                        <h2>Chika Yadiv</h2>
                        <h3>Co-Founder, MildWaters</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurExpertise