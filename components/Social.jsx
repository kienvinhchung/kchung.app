"use client";

import Link from "next/link";

// https://react-icons.github.io/react-icons/icons/fa/
import { FaKaggle, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaComment } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const socials = [
    { icon: <FaKaggle />, path: "https://www.kaggle.com/kienvchung" },
    { icon: <SiTableau />, path: "https://public.tableau.com/app/profile/kienvchung/vizzes" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kienvchung/" },
    { icon: <FaEnvelope />, path: "mailto:kienvchung@gmail.com?subject=Subject&body=Hello," },
    { icon: <FaPhoneAlt />, path: "tel:+14699968230" },
    { icon: <FaComment />, path: "sms:+14699968230" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link 
                    key={index} 
                    href={item.path} 
                    className={iconStyles} 
                    target={item.path.startsWith('http') ? "_blank" : ""} 
                    rel={item.path.startsWith('http') ? "noopener noreferrer" : ""}
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
