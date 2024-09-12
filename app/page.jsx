import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const title = "Data Science Professional";
const text1 = "Hi, I'm";
const text2 = "Kien Chung.";
const intro = "I thrive at transforming complex data into actionable insights by harnessing the power of data to create impactful solutions and drive business success.";

const Home =() => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mt-0">
            {/* Name */}
            <span className="text-xl">
              {title.split('').map((char, index) => (
                  <span key={index} className="text-primarytext hover:text-accent">
                      {char === ' ' ? '\u00A0' : char}
                  </span>
              ))}
            </span>
            <h1 className="h1 mt-2 mb-4 xl:mb-10">
              {text1.split('').map((char, index) => (
                  <span key={index} className="text-primarytext hover:text-accent">
                      {char === ' ' ? '\u00A0' : char}
                  </span>
              ))}
              <br />
              {text2.split('').map((char, index) => (
                  <span key={index} className="text-accent hover:text-primarytext">
                      {char === ' ' ? '\u00A0' : char}
                  </span>
              ))}
            </h1>
            {/* Intro */}
            <p className="max-w-[800px] xl:max-w-[550px] mb-6 xl:mb-12 text-primarytext text-center xl:text-justify">
              I thrive at transforming complex data into actionable insights 
              by harnessing the power of data to create impactful solutions and drive business success. 
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              
              <Link href="/resume">
                <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>

            </div>
            
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;

{/*
<span className="text-xl">Data Science Professional</span>

<span className="text-primarytext hover:text-accent">H</span>
<span className="text-primarytext hover:text-accent">i</span>
<span className="text-primarytext hover:text-accent">,</span>
<span> </span>
<span className="text-primarytext hover:text-accent">I</span>
<span className="text-primarytext hover:text-accent">'</span>
<span className="text-primarytext hover:text-accent">m</span>
<br />
<span className="text-accent hover:text-primarytext">K</span>
<span className="text-accent hover:text-primarytext">i</span>
<span className="text-accent hover:text-primarytext">e</span>
<span className="text-accent hover:text-primarytext">n</span>
<span> </span>
<span className="text-accent hover:text-primarytext">C</span>
<span className="text-accent hover:text-primarytext">h</span>
<span className="text-accent hover:text-primarytext">u</span>
<span className="text-accent hover:text-primarytext">n</span>
<span className="text-accent hover:text-primarytext">g</span>
<span className="text-accent hover:text-primarytext">.</span>   
*/}