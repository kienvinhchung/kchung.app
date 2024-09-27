"use client";

import React, { useState } from 'react';

// https://react-icons.github.io/react-icons/icons/fa/

import { 
    FaPython, 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaNodeJs, 
    FaVuejs, 
    FaJava, 
    FaRegCopy, 
} from "react-icons/fa";

import { 
    SiJupyter, 
    SiPandas, 
    SiNumpy, 
    SiScipy, 
    SiScikitlearn, 
    SiPytorch, 
    SiTensorflow, 
    SiApachespark, 
    SiPowerbi, 
    SiTableau, 
    SiTailwindcss, 
    SiNextdotjs, 
} from "react-icons/si";

import { TbSql } from "react-icons/tb"; 

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

//about data
const about = {
    title: 'About me',
    description: "Highly self motivated and passionate individual with foundational experience, seeking an opportunity to contribute to the company's growth while gaining industry knowledge. Currently pursuing a MS program in data science at PACE University, driven by a passion to become a data-driven problem solver. Demonstrated a successful history of balancing professional responsibilities and academic pursuits. Proven track record of applying expertise knowledge in data analytics and utilizing tools through various professional projects.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Kien Chung",
        },
        {
            fieldName: "Mobile",
            fieldValue: "+1 (469) 996-8230",
        },
        {
            fieldName: "Email",
            fieldValue: "kienvchung@gmail.com",
        },
        {
            fieldName: "LinkedIn",
            fieldValue: "www.linkedin.com/in/kienvchung",
        },
        {
            fieldName: "Work Eligibility",
            fieldValue: "US citizen",
        },{
            fieldName: "Languages",
            fieldValue: "English, Vietnamese, Chinese",
        },
    ]
};

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "A passionate individual with foundational experience, seeking an opportunity to contribute to the company's growth while gaining industry knowledge.",
    items: [
        {
            company: "British Airways",
            location: "Remote",
            position: "Data Science Intern",
            type: "",
            duration: "Summer 2024",
        },
        {
            company: "Esority LLC",
            location: "Dallas, TX",
            position: "Data Analyst",
            type: "Contract",
            duration: "03/2023 - 12/2023",
        },
        {
            company: "EXP Realty",
            location: "Dallas, TX",
            position: "Data Entry Analyst",
            type: "Contract",
            duration: "01/2022 - 02/2023",
        },
        {
            company: "Redfin Corporation",
            location: "Dallas, TX",
            position: "Real Estate Sales Agent",
            type: "Contract",
            duration: "09/2021 - 01/2022",
        },
        {
            company: "Hard Rock Casino",
            location: "Atlantic City, NJ",
            position: "Fine Dining Server",
            type: "Part-time during school",
            duration: "06/2018 - 08/2021",
        },
    ]
};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'Strong foundation in data, computer science, business intelligence, business administration, finance, accounting, statistics, and mathematics.',
    items: [
        {
            institution: "PACE University - NYC, NY",
            degree: "Master of Science in Data Science",
            year: "Class of 2025",
            infopath: "https://www.pace.edu/",
        },
        {
            institution: "Rutgers - State University, NJ",
            degree: "Bachelor of Arts in Computer Science",
            minor1: "Business Administration",
            minor2: "Mathematics",
            year: "2021",
            infopath: "https://www.rutgers.edu/",
        },
        {
            institution: "Atlantic Cape College, NJ",
            degree: "Associate in Science in Computer I.S.",
            year: "2018",
            infopath: "https://www.atlanticcape.edu/",
        },
        {
            institution: "Absegami High School, NJ",
            degree: "High School Diploma",
            year: "2015",
            infopath: "https://www.absegami.net/",
        },
    ]
};

//certification data
const certification = {
    icon: '/assets/resume/cap.svg',
    title: 'My Certification',
    description: 'Professional certification in data analytics certified by top companies, Microsoft and Google.',
    items: [
        {
            certificate: "British Airways Certificate of Completion",
            issuer: "British Airways - Forage",
            verifypath: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_ueEFA5728ANyvcgFy_1725944753808_completion_certificate.pdf",
            infopath: "https://www.theforage.com/simulations/british-airways/data-science-yqoz",
        },
        {
            certificate: "Power BI Data Analyst Associate",
            issuer: "Microsoft",
            verifypath: "https://learn.microsoft.com/en-us/users/kienchung-3610/credentials/1ef97b3aee73553a?ref=https%3A%2F%2Fkienchung.net%2F",
            infopath: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/?practice-assessment-type=certification",
        },
        {
            certificate: "Azure Data Fundamentals",
            issuer: "Microsoft",
            verifypath: "https://learn.microsoft.com/en-us/users/kienchung-3610/credentials/841371358dd2a1f2",
            infopath: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/?practice-assessment-type=certification",
        },
        {
            certificate: "Advanced Data Analytics Professional",
            issuer: "Google",
            verifypath: "",
            infopath: "https://www.coursera.org/professional-certificates/google-advanced-data-analytics",
        },
        {
            certificate: "Data Analytics Professional",
            issuer: "Google",
            verifypath: "https://www.coursera.org/account/accomplishments/professional-cert/TK7P7ZUUYNU2",
            infopath: "https://www.coursera.org/professional-certificates/google-data-analytics",
        },
    ]
};

//skills data
const skills = {
    title: 'My Skills',
    description: 'Technical skillsets, programming languages, libraries, tools, and softwares.',
    skillList: [
        {
            icon: <FaPython />,
            name: "Python 3",
        },
        {
            icon: <SiPandas />,
            name: "Pandas",
        },
        {
            icon: <TbSql />,
            name: "SQL",
        },
        {
            icon: <SiJupyter />,
            name: "Jupyter",
        },
        {
            icon: <SiNumpy />,
            name: "NumPy",
        },
        {
            icon: <SiScipy />,
            name: "SciPy",
        },
        {
            icon: <SiScikitlearn />,
            name: "Scikit-learn",
        },
        {
            icon: <SiPytorch />,
            name: "PyTorch",
        },
        {
            icon: <SiTensorflow />,
            name: "TensorFlow",
        },
        {
            icon: <SiApachespark />,
            name: "Apache Spark",
        },
        {
            icon: <SiPowerbi />,
            name: "MS power BI",
        },
        {
            icon: <SiTableau />,
            name: "Tableau",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaVuejs />,
            name: "Vue.js",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
    ]
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
//import { ScrollArea } from "@/components/ui/scroll-area";

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


const Resume = () => {

    const [copied, setCopied] = useState(null);

    const handleCopyClick = (fieldName, fieldValue) => {
        handleCopy(fieldValue);
        setCopied(fieldName);
        setTimeout(() => setCopied(null), 2000); // Reset the state after 2 seconds
    };

    return (
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }} 
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                defaultValue="about"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    {/* tab list */}
                    <TabsList 
                    className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
                    >
                        <TabsTrigger value="about" className="hover:bg-accent">About Me</TabsTrigger>
                        <TabsTrigger value="experience" className="hover:bg-accent">Experience</TabsTrigger>
                        <TabsTrigger value="education" className="hover:bg-accent">Education</TabsTrigger>
                        <TabsTrigger value="certification" className="hover:bg-accent">Certification</TabsTrigger>
                        <TabsTrigger value="skills" className="hover:bg-accent">Skills</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[80vh] w-full">

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">

                                <div className='flex flex-col gap-8 items-center text-center justify-center xl:justify-start xl:flex-row'>
                                    <h3 className="text-4xl font-bold text-accent">
                                        {about.title}
                                    </h3>
                                    <Link
                                    href="https://1drv.ms/b/c/9747102949ee8fa5/EaRybEoC_zFLnU6yq05ohG4BMGjUX0PfwbFYVNOW1VUQoQ?e=YJ8nXi/" 
                                    target="_blank"
                                    >
                                        <Button 
                                        variant="outline"
                                        size="lg"
                                        className="uppercase flex items-center gap-2 font-bold text-2xl"
                                        >
                                        <span>Download CV</span>
                                        <FiDownload className="text-xl" />
                                        </Button>
                                    </Link>
                                </div>

                                <p className="max-w text-primarytext/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 max-w mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-center gap-4 grid grid-cols-1 gap-y-2">
                                                <div className="text-primarytext">
                                                    <span className="text-primarytext/60">{item.fieldName}</span>
                                                    {(item.fieldName === "Mobile") && (
                                                        <button onClick={() => handleCopyClick(item.fieldName, "+14699968230")} className={`ml-2 text-xl hover:text-primarytext`}>
                                                            <FaRegCopy className={`hover:text-primarytext ${copied === item.fieldName ? 'text-primarytext/10' : 'text-accent'}`} />
                                                        </button>
                                                    )}
                                                    {(item.fieldName === "Email") && (
                                                        <button onClick={() => handleCopyClick(item.fieldName, item.fieldValue)} className={`ml-2 text-xl hover:text-primarytext`}>
                                                            <FaRegCopy className={`hover:text-primarytext ${copied === item.fieldName ? 'text-primarytext/10' : 'text-accent'}`} />
                                                        </button>
                                                    )}
                                                    {(item.fieldName === "LinkedIn") && (
                                                        <button onClick={() => handleCopyClick(item.fieldName, "https://www.linkedin.com/in/kienvchung/")} className={`ml-2 text-xl hover:text-primarytext`}>
                                                            <FaRegCopy className={`hover:text-primarytext ${copied === item.fieldName ? 'text-primarytext/10' : 'text-accent'}`} />
                                                        </button>
                                                    )}
                                                </div>
                                                <span className="text-xl">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-accent">{experience.title}</h3>
                                <p className="max-w-[800px] text-primarytext/60 mx-auto xl:mx-0">{experience.description}</p>
                                {/* <ScrollArea className="h-[400px]"> */}
                                <ul className="grid grid-cols-1 gap-[30px] mb-8"> {/* lg:grid-cols-2 */}
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#18181c] bg-opacity-75 h-[185px] py-2 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent font-bold">{item.duration}</span>
                                                <h3 className="text-2xl font-bold max-w-[600px] min-h-[60px] text-center lg:text-left">
                                                    <div>{item.position}</div>
                                                    <div className="text-base italic font-light my-1">{item.type}</div>
                                                </h3>
                                                <div className="flex items-center gap-3 text-sm lg:text-base">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-primarytext/60">{item.company}, {item.location}</p>
                                                </div>
                                            </li>
                                    );
                                    })}
                                </ul>
                                {/* </ScrollArea> */}
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                                <p className="max-w-[800px] text-primarytext/60 mx-auto xl:mx-0">{education.description}</p>
                                {/* <ScrollArea className="h-[400px]"> */}
                                <ul className="grid grid-cols-1 gap-[30px] mb-8"> {/* lg:grid-cols-2 */}
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#18181c] bg-opacity-75 h-[185px] py-2 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent font-bold">{item.year}</span>
                                                <h3 className="text-2xl font-bold max-w-[600px] min-h-[60px] text-center lg:text-left">
                                                    <div>{item.degree}</div>
                                                    <div className="text-sm italic font-light my-1">
                                                        {(item.degree === "Bachelor of Arts in Computer Science") && (
                                                            <>Minors: {item.minor1}, and {item.minor2}.</>
                                                        )}
                                                    </div>
                                                </h3>
                                                <div className="flex items-center gap-3 text-sm lg:text-base">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <Link 
                                                    href={item.infopath} 
                                                    target="_blank" 
                                                    className="text-primarytext/60 hover:text-accent"
                                                    >
                                                        {item.institution}
                                                    </Link>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {/* </ScrollArea> */}
                            </div>
                        </TabsContent>

                        {/* certification */}
                        <TabsContent value="certification" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-accent">{certification.title}</h3>
                                <p className="max-w-[800px] text-primarytext/60 mx-auto xl:mx-0">{certification.description}</p>
                                {/* <ScrollArea className="h-[400px]"> */}
                                <ul className="grid grid-cols-1 gap-[30px] mb-8">
                                    {certification.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#18181c] bg-opacity-75 h-[185px] py-2 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent font-bold">{item.issuer}</span>
                                                <h3 className="text-2xl font-bold max-w-[600px] min-h-[60px] text-center lg:text-left">{item.certificate}</h3>
                                                <div className="flex items-center gap-3 text-sm lg:text-base">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <Link href={item.infopath} target="_blank" className="text-primarytext/60 hover:text-accent">More info</Link>
                                                    <br />
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <Link href={item.verifypath} target="_blank" className="text-primarytext/60 hover:text-accent">Verification</Link>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {/* </ScrollArea> */}
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold text-accent">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[800px] text-primarytext/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 xl:gap-[30px] mb-8">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#18181c] bg-opacity-75 rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            <div className='mb-3'>{skill.icon}</div>
                                                            <div className='text-xs text-accent'>{skill.name}</div>
                                                        </div>
                                                        
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>
                                                            {skill.name}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;