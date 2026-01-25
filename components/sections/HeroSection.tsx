'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu } from 'lucide-react';
import { AnimatedHero } from '@/components/templates';
import { ThemeToggle } from '@/components/organisms';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      {/* Theme Toggle - fixed position */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedHero
          delay={0}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Software Solutions Architect
            </span>
          </div>
        </AnimatedHero>

        <AnimatedHero delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Turning Ideas into{' '}
            <span className="text-primary">Intelligent Digital Reality</span>
          </h1>
        </AnimatedHero>

        <AnimatedHero delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Full-Stack Developer & NVIDIA-Certified AI Associate specializing in
            automated web apps and business-scale AI agents.
          </p>
        </AnimatedHero>

        <AnimatedHero
          delay={0.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-2 px-8 w-full sm:w-auto">
            Automate My Business
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 px-8 bg-transparent w-full sm:w-auto"
          >
            View Full-Stack Work
          </Button>
        </AnimatedHero>
      </div>
    </section>
  );
}
