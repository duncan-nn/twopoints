import Link from 'next/link';
import React from 'react';
import Image from "next/image";

function OurWorkSection() {
  return (
    <div className='our-work-section'>
        <div className='inner'>
            <div className='header'>
                <div className='head-wrap'>
                    <div className='subject-tag'>
                        <span></span><h3 className='tag-text'>Our work</h3>
                    </div>
                    <h1 className='text'>Take a look at our most recent projects</h1>
                </div>
            </div>
            <section className="product-section">
                <div className="product-grid">
                    <Link href={'/'} className="product-card">
                        <div className="product-images">
                            <div className="product-image-top">
                                <Image
                                    src={'/images/projects/project1.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="product-image-bottom">
                                <Image
                                    src={'/images/projects/project1b.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="product-details">
                            <div className='subject-tag'>
                                <span></span><h3 className='tag-text'>PureLeaf</h3>
                            </div>
                            <h2 className='text'>Vibrant 3D visuals that bring PureLeaf&apos;s freshness and calm sophistication to life across social media.</h2>
                        </div>
                    </Link>
                    <Link href={'/'} className="product-card">
                        <div className="product-images">
                            <div className="product-image-top">
                                <Image
                                    src={'/images/projects/project2.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="product-image-bottom">
                                <Image
                                    src={'/images/projects/project2b.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="product-details">
                            <div className='subject-tag'>
                                <span></span><h3 className='tag-text'>Oyelu</h3>
                            </div>
                            <h2 className='text'>Bold virtual photography that transforms Oyelu&apos;s products into radiant, statement-worthy visuals.</h2>
                        </div>
                    </Link>
                    <Link href={'/'} className="product-card">
                        <div className="product-images">
                            <div className="product-image-top">
                                <Image
                                    src={'/images/projects/project3.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="product-image-bottom">
                                <Image
                                    src={'/images/projects/project3b.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="product-details">
                            <div className='subject-tag'>
                                <span></span><h3 className='tag-text'>Lisa Folawiyo</h3>
                            </div>
                            <h2 className='text'>A sleek, fast online store reflecting Lisa Folawiyo&apos;s timeless elegance and modern luxury.</h2>
                        </div>
                    </Link>
                </div>
                {/* <div className="full-width-project">
                    <Link href={'/'} className="full-width-product-card">
                        <div className="product-images">
                            <div className="product-image-top">
                                <Image
                                    src={'/images/projects/project3.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="product-image-bottom">
                                <Image
                                    src={'/images/projects/skepta.png'}
                                    alt="Product name"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="product-details">
                            <div className='subject-tag'>
                                <span></span><h3 className='tag-text'>Lisa Folawiyo</h3>
                            </div>
                            <h2 className='text'>Website redesigned for speed and simplicity</h2>
                        </div>
                    </Link>
                </div> */}
            </section>
        </div>
    </div>
  )
}

export default OurWorkSection