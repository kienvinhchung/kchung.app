"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_ebstxpb', 
        'template_ab3lprx', 
        form.current, {publicKey: 'voE5SX4QTryY9LfSf',}
      )
      .then(
        () => {
          //console.log('SUCCESS!');
          setStateMessage('Message sent successfully!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 8000); // hide message after 5 seconds
          form.current.reset();
        },
        (error) => {
          //console.log('FAILED...', error.text);
          setStateMessage('Something went wrong, please try again!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 8000); // hide message after 5 seconds
        }
      );
    e.target.reset();
  };

  return (
    <div className='xl:w-[90%] order-1 xl:order-none'>
      {/* Form */}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#18181c] rounded-xl">

        {/* title */}
        <h3 className="text-4xl text-accent">Let's work together!</h3>
        <p className="text-primarytext/60">Send me a message.</p>

        {/* div for user info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#18181c]">
          <input type="text" name="user_name" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" placeholder="Name *" />
          <input type="email" name="user_email" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" placeholder="Email *" />
          <input type="text" name="user_company" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" placeholder="Company (optional)" />
          <input type="phone" name="user_phone" class="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" placeholder="Phone (optional)" />
        </div>

        {/* service selection */}
        <select name="user_service" className="flex h-[48px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-0 text-base placeholder:text-primarytext/60 outline-none hover:border-accent">
          <option value="" disabled selected>Select a service</option>
          <option value="Job opportunity">Job opportunity</option>
          <option value="Service inquiry">Service inquiry</option>
        </select>

        {/* user message box */}
        <textarea 
          name="message" 
          className="h-[200px] rounded-md border border-primarytext/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-primarytext/60 outline-none hover:border-accent" 
          placeholder="Type your message here..." 
        />

        {/* send button */}
        <input 
          type="submit" 
          value="Send message" 
          disabled={isSubmitting}
          className="mx-auto h-12 w-48 text-lg bg-accent text-primary hover:bg-primary hover:text-accent border border-accent hover:border-accent cursor-pointer mt-8" 
        />
        <div className='h-[10px]'>
          {stateMessage && <p className="text-xl text-center text-accent">{stateMessage}</p>}
        </div>
        
      </form>
    </div>
  );
};

export default ContactForm;




