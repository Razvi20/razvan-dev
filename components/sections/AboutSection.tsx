'use client';

import { MapPin, Code2, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Container } from '@/components/atoms';
import { StatCard } from '@/components/molecules';
import { AnimatedSection } from '@/components/templates';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '10+', label: 'Happy Clients' },
];

const skills = [
  'Next.js/React.js',
  'Angular',
  'NestJS',
  'Spring Boot',
  'TypeScript',
  'PostgreSQL',
  'System Design',
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <Container>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Photo */}
          <AnimatedSection
            animation="scaleIn"
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-linear-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl" />
              <div className="absolute -top-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-2 -left-2 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-xl" />

              {/* Photo container */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-border bg-card shadow-2xl">
                <Image
                  src="/portrait.jpeg"
                  alt="Razvan Opris - Full-Stack Software Architect"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Bottom gradient for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background/90 to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Razvan Opris
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Software Architect
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Bio */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            {/* Section Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                About Me
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance">
              Hi, I&apos;m Razvan
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I&apos;m a Full-Stack Software Architect passionate about
                building digital solutions that make a real impact. With
                expertise spanning frontend, backend, and system design, I bring
                ideas to life through clean code and thoughtful architecture.
              </p>
              <p>
                My approach combines technical excellence with a deep
                understanding of business needs. Whether it&apos;s a complex
                enterprise system or a sleek web application, I focus on
                delivering solutions that are scalable, maintainable, and built
                to last.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mb-8">
              <Button size="lg" variant="link" className="gap-2 p-0!" asChild>
                <a href="/api/resume" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <AnimatedSection
                  key={stat.label}
                  animation="fadeUp"
                  delay={0.3 + index * 0.1}
                >
                  <StatCard value={stat.value} label={stat.label} />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
