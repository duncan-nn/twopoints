'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppChat() {
      //WhatsApp
    const WhatsAppNumber = 2348051351800;
    let whatsAppMsg = "";
    whatsAppMsg = 'Hi%2C+I%27m+interested+in+your+services';

    const [scrolled, setScrolled] = useState(false);
    const whatsappRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= 200) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  return (
    <div
    ref={whatsappRef} 
    className={`whatsappchat ${scrolled ? 'show-whatsapp-chat' : 'hide-whatsapp-chat'} `}>
        <a href={`https://wa.me/${WhatsAppNumber}?text=${whatsAppMsg}`}
        target="_blank" className='whatsappchat-link'>
            <div className='whatsappchat-icon-wrap blink'>
                <FontAwesomeIcon icon={faWhatsapp} className="whatsappchat-icon" />
            </div>
            {/* <div className='whatsappchat-icon-animation blink'>
            </div> */}
        </a>
    </div>
  )
}

export default WhatsAppChat