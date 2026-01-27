'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPrisma,
    SiFastapi,
    SiScikitlearn,
    SiNextdotjs,
} from 'react-icons/si';
import { FaBrain, FaDatabase } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Map skill names to their icons
const skillIcons: { [key: string]: any } = {
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    Python: SiPython,
    HTML: SiHtml5,
    CSS: SiCss3,
    React: SiReact,
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    FastAPI: SiFastapi,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    'Prisma ORM': SiPrisma,
    NumPy: FaDatabase,
    Pandas: FaDatabase,
    'Scikit-learn': SiScikitlearn,
    'Machine Learning': FaBrain,
};

// Map skill names to colors for icons
const skillColors: { [key: string]: string } = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    HTML: '#E34F26',
    CSS: '#1572B6',
    React: '#61DAFB',
    'Next.js': '#ffffff',
    'Tailwind CSS': '#06B6D4',
    'Node.js': '#339933',
    'Express.js': '#ffffff',
    FastAPI: '#009688',
    MongoDB: '#47A248',
    MySQL: '#4479A1',
    'Prisma ORM': '#2D3748',
    NumPy: '#013243',
    Pandas: '#150458',
    'Scikit-learn': '#F7931E',
    'Machine Learning': '#FF6F61',
};

// Category names mapping
const categoryNames: { [key: string]: string } = {
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    dataTools: 'Data & ML',
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.set('.skill-card', { opacity: 0, y: 50, scale: 0.9 });
            gsap.set('.category-title', { opacity: 0, x: -50 });

            tl.to('.category-title', {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
            }).to(
                '.skill-card',
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'back.out(1.5)',
                },
                '-=0.4',
            );
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-section relative">
            {/* Background accent */}
            <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionTitle title="My Stack" />

                <div className="mt-12 space-y-10">
                    {Object.entries(MY_STACK).map(([categoryKey, skills]) => (
                        <div key={categoryKey}>
                            <h3 className="category-title text-xl font-anton gradient-text-static mb-6 uppercase tracking-wider">
                                {categoryNames[categoryKey]}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill) => {
                                    const IconComponent =
                                        skillIcons[skill.name] || FaDatabase;
                                    const iconColor = skillColors[skill.name] || 'currentColor';
                                    return (
                                        <div
                                            key={skill.name}
                                            className="skill-card group relative px-5 py-4 glass-hover rounded-xl flex items-center gap-3 cursor-default"
                                        >
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: `radial-gradient(circle at center, ${iconColor}15 0%, transparent 70%)`
                                                }}
                                            />

                                            <IconComponent
                                                className="w-6 h-6 flex-shrink-0 transition-all duration-300 relative z-[1] group-hover:scale-110"
                                                style={{
                                                    color: 'hsl(var(--muted-foreground))',
                                                }}
                                                onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                                                    (e.target as SVGElement).style.color = iconColor;
                                                }}
                                                onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
                                                    (e.target as SVGElement).style.color = 'hsl(var(--muted-foreground))';
                                                }}
                                            />
                                            <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap relative z-[1]">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
