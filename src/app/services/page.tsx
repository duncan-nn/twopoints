import React from 'react';
import { Metadata } from "next";

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
                        <h1 className='hero-text1'>We&apos;re a creative and digital marketing agency with expertise.</h1>
                    </div>
                    <div className='right'></div>
                </div>
                <div className='bottom'>
                    <div className='left'></div>
                    <div className='right'>
                        <h2>We bring our passion for good design to brave brands and deliver something you can shout about.</h2>
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>Virtual Product Photography</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>
                                High-quality, hyper-real visuals that make your products irresistible. Our virtual photography combines design precision with studio realism.
                            </h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='head-text'>Perfect for:</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>Catlogs</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>Online Stores</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>03</span>
                                    <span className='list-item-name'>Marketing</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>04</span>
                                    <span className='list-item-name'>Campaigns</span>
                                </div>                           
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>3D Product Animation</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>Bring your products to life. We create stunning 3D animations that 
                                capture attention, explain function, and spark emotion.</h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='head-text'>Perfect for:</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>Ads</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>Social Media</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>03</span>
                                    <span className='list-item-name'>Product Launches</span>
                                </div>                       
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>Web Design & Maintenance</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>Your website is your brand&apos;s home. We build sleek, user-friendly, and conversion-focused websites designed to elevate your digital presence—then keep them running flawlessly.</h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='head-text'>Websites include:</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>Corporate / Informational</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>Blog / Portfolio</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>03</span>
                                    <span className='list-item-name'>eCommerce / Online Stores</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>04</span>
                                    <span className='list-item-name'>Memberships / Saas</span>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>eCommerce Solutions</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>From storefront setup to smart automation, we deliver full-scale eCommerce systems built to sell.</h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='head-text'>Expertise:</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>WooCommerce</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>SEO</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>03</span>
                                    <span className='list-item-name'>Payment Gateways</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>04</span>
                                    <span className='list-item-name'>Email Marketing</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>05</span>
                                    <span className='list-item-name'>Analytics & Reporting</span>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services