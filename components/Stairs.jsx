"use client";

import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index -1;
};

const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs */}
            {
                [...Array(6)].map((_, index) => {
                    return (
                        <motion.div 
                            key={index}
                            variants={stairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4, /* original: 0.4 */
                                ease: "easeInOut",
                                delay: reverseIndex(index) * 0.1, /* original: 0.1 */
                            }}
                            /* https://tailwindcss.com/docs/background-color */
                            className="h-full w-full bg-accent relative" /* original: bg-white */
                        />
                    );
                })
            }
        </>
    );
};

export default Stairs;