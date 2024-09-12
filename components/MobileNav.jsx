"use client";

import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "résumé",
        path: "/resume",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();

    /*  mobile nav auto collapse */
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                { /* <div>logo</div> */ }
                <div className="mt-20 mb-10 text-center" /*mt-32*/>
                    <Link href="/" onClick={handleLinkClick}>  {/* add onClick for auto collapse */}
                        <h1 className="text-4xl font-semibold hover:text-accent" /*text-4xl*/>
                            <span className="text-accent">k</span>chung<span className="text-accent">.</span>app
                        </h1>
                    </Link>
                </div>

                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path} 
                                key={index} 
                                onClick={handleLinkClick}  /* add onClick for auto collapse */
                                className={`${
                                    link.path === pathname && 
                                    "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;