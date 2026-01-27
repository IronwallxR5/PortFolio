import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center pb-10 pt-20 relative" id="contact">
            {/* Top gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container">
                <p className="text-lg text-muted-foreground">
                    Have a project in mind?
                </p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-2xl sm:text-3xl md:text-4xl font-anton inline-block mt-5 animated-underline hover:text-primary transition-colors"
                >
                    {GENERAL_INFO.email}
                </a>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-8">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            title={link.name}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-sm text-muted-foreground/60 mt-10">
                    © {currentYear} {GENERAL_INFO.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
