'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { GENERAL_INFO } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="py-section relative" id="about-me">
            {/* Background accent */}
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-[1]" ref={container}>
                <p className="pb-3 border-b border-border/50 text-muted-foreground slide-up-and-fade flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    About Me
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8">
                    <div className="md:col-span-5">
                        <p className="text-4xl md:text-5xl slide-up-and-fade leading-tight">
                            Hey, I&apos;m{' '}
                            <span className="gradient-text-static font-semibold">
                                {GENERAL_INFO.name}
                            </span>
                            <span className="inline-block animate-bounce ml-2">👋</span>
                        </p>
                        <p className="slide-up-and-fade text-muted-foreground mt-4 text-lg">
                            B.Tech AI/ML Student @ NST, Pune
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[500px]">
                            <p className="slide-up-and-fade leading-relaxed">
                                I&apos;m a{' '}
                                <span className="text-foreground font-medium">
                                    Full Stack Developer
                                </span>{' '}
                                who loves turning ideas into reality through code. 
                                From building AI-powered apps to crafting smooth user experiences, 
                                I enjoy every part of the development journey.
                            </p>
                            <p className="mt-4 slide-up-and-fade leading-relaxed">
                                When I&apos;m not coding, you&apos;ll find me solving problems on{' '}
                                <span className="text-foreground font-medium">
                                    LeetCode & Codeforces
                                </span>
                                , exploring new technologies, or building side projects. 
                                I work with{' '}
                                <span className="gradient-text-static font-medium">
                                    React, Node.js, Python & AI/ML
                                </span>
                                .
                            </p>
                            <p className="mt-4 slide-up-and-fade leading-relaxed">
                                Currently obsessed with{' '}
                                <span className="text-foreground font-medium">
                                    AI/ML, building intelligent apps, and pushing pixels to perfection
                                </span>
                                . Always learning, always shipping! 🚀
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
