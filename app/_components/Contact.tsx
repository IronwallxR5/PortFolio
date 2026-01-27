'use client';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Contact = () => {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.to(textRef.current, {
                xPercent: -20,
                ease: 'none',
                duration: 10,
                repeat: -1,
                yoyo: true,
            });
        },
        { scope: container },
    );

    return (
        <section
            className="py-section overflow-hidden relative"
            id="contact-section"
            ref={container}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

            <div className="mb-20 opacity-[0.06] pointer-events-none">
                <div
                    className="flex whitespace-nowrap text-[12vw] leading-[0.8] font-anton select-none"
                    ref={textRef}
                >
                    <span className="mr-10 gradient-text">I&apos;M OPEN TO WORK — LET&apos;S TALK</span>
                    <span className="mr-10 gradient-text">I&apos;M OPEN TO WORK — LET&apos;S TALK</span>
                </div>
            </div>

            <div className="container flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-[1]">
                <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
                        Get in touch
                    </h3>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-anton animated-underline hover:text-primary transition-colors inline-block break-all sm:break-normal"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>

                <div className="flex flex-wrap gap-4">
                    {SOCIAL_LINKS.filter(
                        (link) =>
                            link.name === 'LinkedIn' || link.name === 'Github',
                    ).map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full glass-hover font-medium text-lg uppercase tracking-wide btn-shine"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
