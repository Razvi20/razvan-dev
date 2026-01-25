"use client";

import { ExternalLink, TrendingUp, Clock, Zap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/atoms";
import { SectionHeader, MetricCard, IconBox } from "@/components/molecules";
import { BrowserFrame } from "@/components/organisms";
import { AnimatedSection } from "@/components/templates";

const PROJECT_URL = "https://viennamdvtransfer.com";

const techStack = ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Tailwind"];

const metrics = [
  { icon: TrendingUp, label: "Revenue Increase", value: "340%" },
  { icon: Clock, label: "Time Saved Weekly", value: "40hrs" },
  { icon: Zap, label: "Automation Rate", value: "95%" },
];

export function ShowcaseSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Featured Case Study"
            title="The Showcase"
            description="A high-impact project demonstrating end-to-end development excellence."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="space-y-8">
          {/* Browser Frame with Screenshot Placeholder */}
          <BrowserFrame
            url={PROJECT_URL}
            title="Vienna MDV Transfer Preview"
            // Add screenshotSrc="/screenshots/vienna-mdv-preview.png" when available
          />

          {/* Project Info Card */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Info */}
            <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4 mb-6">
                <IconBox icon={MapPin} size="md" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Vienna MDV Transfer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Premium Airport Transfer Booking System
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Transformed manual WhatsApp bookings into a comprehensive 24/7
                online booking platform. Features real-time availability,
                automated confirmations, fleet management, and a complete admin
                dashboard for business operations.
              </p>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-4">
              {metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link href={PROJECT_URL} target="_blank">
              <Button size="lg" className="gap-2">
                Visit Live Site
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
