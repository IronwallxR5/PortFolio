'use client';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO } from '@/lib/data';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About',
        url: '/#about-me',
    },
    {
        name: 'Skills',
        url: '/#my-stack',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
    {
        name: 'Education',
        url: '/#my-experience',
    },
];

const Navbar = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-[4] w-[95%] max-w-4xl">
            <div
                className={`
                    rounded-full px-4 sm:px-6 py-3 transition-all duration-500
                    ${scrolled
                        ? 'bg-background/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/30'
                        : 'bg-black/20 backdrop-blur-xl border border-white/5 shadow-lg shadow-black/20'
                    }
                `}
            >
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-lg font-anton gradient-text-static hover:opacity-80 transition-all duration-300 tracking-wider"
                        >
                            {GENERAL_INFO.name.split(' ')[0]}
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {MENU_LINKS.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => router.push(link.url)}
                                className="px-4 py-1.5 text-foreground/70 hover:text-primary hover:bg-white/5 rounded-full transition-all duration-300 text-sm font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="flex items-center">
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="hidden sm:inline-flex px-5 py-1.5 bg-primary/10 hover:bg-primary hover:text-black text-primary border border-primary/30 hover:border-primary rounded-full transition-all duration-300 text-sm font-medium btn-shine"
                        >
                            Get in Touch
                        </a>

                        {/* Mobile Contact */}
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="sm:hidden text-primary hover:text-primary/80 text-sm font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
