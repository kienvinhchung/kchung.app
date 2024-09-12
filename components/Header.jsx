"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from 'react';

const Header = () => {

    const [isWhite, setIsWhite] = useState(true);
    
    return (
        <header className="py-8 xl:py-12 text-primarytext">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                <h1
                    className={`text-2xl font-semibold ${
                        isWhite ? 'text-white' : 'text-accent'
                    } hover:${isWhite ? 'text-accent' : 'text-white'}`}
                    onMouseEnter={() => setIsWhite(!isWhite)}
                    onMouseLeave={() => setIsWhite(!isWhite)}
                >
                    <span className={isWhite ? 'text-accent' : 'text-white'}>k</span>
                    chung
                    <span className={isWhite ? 'text-accent' : 'text-white'}>.</span>
                    app
                </h1>
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-6">
                    <Nav />
                    <Link href="/contact">
                        <Button className="hover:bg-primary hover:text-accent border border-accent hover:border-accent">Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;

{/* 
    <h1 className="text-2xl font-semibold hover:text-accent">
                        <span className="text-accent">k</span>chung<span className="text-accent">.</span>app
                    </h1>
*/}