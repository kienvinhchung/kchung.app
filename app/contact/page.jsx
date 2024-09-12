"use client";

import { FaPhoneAlt, FaComment, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt, FaRegCopy } from "react-icons/fa";

import { motion } from "framer-motion";

import React, { useState } from 'react';

import Link from "next/link";

import ContactForm from "@/components/ContactForm";

const info = [
    {
        icon: <FaPhoneAlt />,
        icon_2: <FaComment />,
        title: "Mobile",
        description: "+1 (469) 996-8230",
        path: "tel:+14699968230",
        path_2: "sms:+14699968230",
        copy_string: "+14699968230",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "kienvchung@gmail.com",
        path: "mailto:kienvchung@gmail.com?subject=Subject&body=Hello,",
    },
    {
        icon: <FaLinkedinIn />,
        title: "LinkedIn",
        description: "linkedin.com/in/kienvchung",
        path: "https://www.linkedin.com/in/kienvchung/",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Locations",
        description: "Dallas Forth-Worth, TX",
        description_l2: "New York Metropolitan Area, NY-NJ",

    },
];

const handleCopy = (text) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textarea);
    }
};

const Contact = () => {

    const [copied, setCopied] = useState(null);

    const handleCopyClick = (fieldName, fieldValue) => {
        handleCopy(fieldValue);
        setCopied(fieldName);
        setTimeout(() => setCopied(null), 2000); // Reset the state after 2 seconds
    };

    return (
        <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ 
            opacity: 1, 
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }} 
        className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">

                    <div>
                        <ContactForm />
                    </div>

                    {/* information on the xl:right-pane, or down-pane*/}
                    <div className="flex-1 flex items-center xl:justify-end order-2 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-12">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        {/* icon box */}
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#18181c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        {/* infos */}
                                        <div className="flex-1">
                                            {/* title */}
                                            <span className="text-primarytext/60">{item.title}</span>
                                            {(item.title === "Mobile") && (
                                                <button onClick={() => handleCopyClick(item.title, item.copy_string)} className={`ml-2 text-xl hover:text-primarytext`}>
                                                    <FaRegCopy className={`hover:text-primarytext ${copied === item.title ? 'text-primarytext/20' : 'text-accent'}`} />
                                                </button>
                                            )}
                                            {(item.title === "Email") && (
                                                <button onClick={() => handleCopyClick(item.title, item.description)} className={`ml-2 text-xl hover:text-primarytext`}>
                                                    <FaRegCopy className={`hover:text-primarytext ${copied === item.title ? 'text-primarytext/20' : 'text-accent'}`} />
                                                </button>
                                            )}
                                            {(item.title === "LinkedIn") && (
                                                <button onClick={() => handleCopyClick(item.title, item.path)} className={`ml-2 text-xl hover:text-primarytext`}>
                                                    <FaRegCopy className={`hover:text-primarytext ${copied === item.title ? 'text-primarytext/20' : 'text-accent'}`} />
                                                </button>
                                            )}
                                            {/* info */}
                                            <div className="flex items-center gap-3">
                                                {/* dot and detail */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <h3 className="text-lg">{item.description}</h3>
                                                {/* mobile */}
                                                {(item.title === "Mobile") && (
                                                    <>
                                                        <Link key= {index} href= {item.path} className=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                                                            {item.icon}
                                                        </Link>
                                                        <Link key= {index} href= {item.path_2} className=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                                                            {item.icon_2}
                                                        </Link>
                                                    </>
                                                )}
                                                {/* email */}
                                                {(item.title === "Email") && (
                                                    <>
                                                        <Link key= {index} href= {item.path} className=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                                                            {item.icon}
                                                        </Link>
                                                    </>
                                                )}
                                                {/* linkedin */}
                                                {(item.title === "LinkedIn") && (
                                                    <>
                                                        <Link key= {index} href= {item.path} className=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" target="_blank">
                                                            {item.icon}
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                            {(item.title === "Locations") && (
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <h3 className="text-lg">{item.description_l2}</h3>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </motion.section>
    );
};

export default Contact;