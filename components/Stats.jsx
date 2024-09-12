"use client";

import CountUp from "react-countup";
import Link from "next/link";

const stats = [
    {
        num: 6,
        text: "Data <br/>Services",
        href: "/services",
    },
    {
        num: 2,
        text: "Years of <br/>Experience",
        href: "/resume",
    },
    {
        num: 5,
        text: "Completed <br/>Projects",
        href: "/projects",
    },
    {
        num: 21,
        text: "Technical <br/>Skills",
        href: "/resume",
    },
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <Link
                            href={item.href} 
                            key={index} 
                            className="flex-1 flex gap-2 items-center justify-center xl:justify-start text-primarytext hover:text-accent"
                            >
                                <CountUp 
                                end={item.num} 
                                duration={6} 
                                delay={2} 
                                className="text-4xl xl:text-6xl font-extrabold text-accent"
                                />
                                <p 
                                className={
                                    `{item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} 
                                    leading-snug`
                                    }
                                dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;

/*

<Link href="/contact">
                        <Button className="hover:bg-primary hover:text-accent border border-accent hover:border-accent">Hire me</Button>
                    </Link>

*/
