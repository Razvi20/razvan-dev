"use client";

import {
  Code2,
  Bot,
  Server,
  Layers,
  MessageSquare,
  Workflow,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/atoms";
import { SectionHeader, IconBox } from "@/components/molecules";
import { AnimatedSection } from "@/components/templates";

interface ExpertiseArea {
  title: string;
  icon: LucideIcon;
  description: string;
  technologies: string[];
  focus: { icon: LucideIcon; text: string }[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Full-Stack Engineering",
    icon: Code2,
    description:
      "Building robust, scalable applications from frontend to backend with modern technologies.",
    technologies: [
      "Angular",
      "React/Next.js",
      "NestJS",
      "Spring Boot",
      "PostgreSQL",
      "MongoDB",
    ],
    focus: [
      { icon: Layers, text: "Presentation Apps" },
      { icon: Server, text: "Robust Backend Systems" },
    ],
  },
  {
    title: "AI Automation",
    icon: Bot,
    description:
      "Leveraging artificial intelligence to automate workflows and create intelligent systems.",
    technologies: [
      "AI Agents",
      "Deep Learning",
      "RAG Systems",
      "LangChain",
      "Vector DBs",
      "OpenAI/Anthropic",
    ],
    focus: [
      { icon: Workflow, text: "Automating Manual Tasks" },
      { icon: MessageSquare, text: "Smart Chatbots" },
    ],
  },
];

function ExpertiseCard({ area, index }: { area: ExpertiseArea; index: number }) {
  return (
    <AnimatedSection
      delay={index * 0.1}
      className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
    >
      <div className="flex items-start gap-4 mb-6">
        <IconBox icon={area.icon} size="lg" />
        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground">
            {area.title}
          </h3>
          <p className="text-muted-foreground text-sm text-balance">
            {area.description}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="text-sm font-medium text-foreground mb-3">
          Technologies
        </div>
        <div className="flex flex-wrap gap-2">
          {area.technologies.map((tech) => (
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

      {/* Focus Areas */}
      <div>
        <div className="text-sm font-medium text-foreground mb-3">
          Focus Areas
        </div>
        <div className="space-y-3">
          {area.focus.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
            >
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ExpertiseSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="What I Do"
            title="Expertise Matrix"
            description="Combining full-stack development with AI expertise to deliver comprehensive solutions."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
