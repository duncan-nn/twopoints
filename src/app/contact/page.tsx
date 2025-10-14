import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Contact TwoPoints Studio | Let’s Create Something Bold",
  description: "Get in touch with TwoPoints Studio for creative strategy, virtual photography, 3D animations, or web development services.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="inner-wrap">
        <div className="header">
          <div className='subject-tag'>
              <span></span><h3 className='tag-text'>Contact</h3>
          </div>
          <h1 className="head-text">It&apos;s nice to meet ya</h1>
        </div>
        <div className="page-body">
          <div className="left">
            <p className="title-desc">
             Fill out the form below and let&apos;s take your brand to the next level.
            </p>
            <div className="socials">
              <h3>Follow us</h3>
              <div className="social-icons">
                <a
                className="icon-link-wrap"
                href="https://www.instagram.com/twopoints.studio/"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a
                className="icon-link-wrap"
                href="https://www.linkedin.com/company/elevate-retaiil/"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
                <a
                className="icon-link-wrap"
                href="https://www.youtube.com/channel/UCYYrfW-yHvn3n2nNmb5MhNA"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
              </div>
            </div>
            <div className='hate-forms'>
              <span className="text-left">Hate contact forms?</span>
              <a href="mailto:hello@twopointsstudio.com" className='f-nav-itemB-right'>
                <span className='d-navitem-text'>hello@twopointsstudio.com</span>
                <div className='item-bottom-bar'/>
              </a>
            </div>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
