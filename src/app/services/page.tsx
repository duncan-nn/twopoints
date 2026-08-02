import React from 'react';
import { Metadata } from "next";
import WhatsAppChat from '@/components/WhatsAppChat';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: "Our Services | TwoPoints Studio Creative Agency",
  description: "Discover our creative and marketing services — from 3D animation and product photography to web design and eCommerce strategy.",
};

function Services() {
  return (
    <div className='service-page'>
        <div className='service-page-inner'>
            <div className='hero'>
                <div className='top'>
                    <div className='left'>
                        <div className='subject-tag'>
                            <span></span><h3 className='tag-text'>services</h3>
                        </div>
                        <h1 className='hero-text1'>Everything You Need to Sell Online with Confidence.</h1>
                    </div>
                    <div className='right'></div>
                </div>
                <div className='bottom'>
                    <div className='left'></div>
                    <div className='right'>
                        <h2>
                            Whether you&apos;re launching your first online store or scaling an established 
                            brand, we create solutions designed for performance, conversion, and long-term growth.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="services">
            {services.map((service) => (
                <div key={service.id} className="service-item">
                <div className="service-item-head">
                    <h1 className="service-name">{service.name}</h1>
                </div>

                <div className="service-item-body">
                    <div className="service-item-left">
                    <h3>{service.description}</h3>
                    </div>

                    <div className="service-item-right">
                    <div className="service-list-container">
                        <div className="list-item">
                        <span className="head-text">{service.listHeading}</span>
                        </div>

                        {service.items.map((item, index) => (
                        <div key={item} className="list-item">
                            <span className="list-count">
                            {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="list-item-name">
                            {item}
                            </span>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
            <WhatsAppChat />
        </div>
    </div>
  )
}

export default Services