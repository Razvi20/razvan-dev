'use client';

import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/atoms';
import { SectionHeader } from '@/components/molecules';
import { AnimatedSection } from '@/components/templates';
import Link from 'next/link';

const EMAIL = 'razvanopris11@gmail.com';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/razvan-opris-61a642223',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Razvi20',
  },
];

export function ContactSection() {
  const createMailtoLink = () => `mailto:${EMAIL}`;

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <Container size="narrow">
        <AnimatedSection>
          <SectionHeader
            badge="Get In Touch"
            title="Let's Work Together"
            description="Have a project in mind? I'd love to hear about it. Send me a direct message and let's discuss how I can help."
          />
        </AnimatedSection>

        {/* Main CTA */}
        <AnimatedSection
          delay={0.2}
          className="p-8 rounded-2xl bg-card border border-border text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">
            Send Me an Email
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Click the button below to open your email with my address
            pre-filled. I typically respond within 24 hours.
          </p>
          <Link href={createMailtoLink()}>
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
          </Link>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-border">
            <span className="text-sm text-muted-foreground">Or find me on</span>
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
