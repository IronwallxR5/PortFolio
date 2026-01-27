'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.set('.experience-item', { opacity: 0, y: 50 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.to('.experience-item', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section relative" id="my-experience">
            {/* Background accent */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-[1]" ref={containerRef}>
                <SectionTitle title="Education" />

                <div className="grid gap-6 mt-8">
                    {MY_EXPERIENCE.map((item, index) => (
                        <div
                            key={item.title}
                            className="experience-item glass rounded-2xl p-6 md:p-8 group hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Gradient accent on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-[1]">
                                <div className="flex-1">
                                    <p className="text-foreground/70 text-base mb-2">
                                        {item.company}
                                    </p>
                                    <p className="text-2xl md:text-3xl font-anton leading-none group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="md:text-right">
                                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                        {item.duration}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
