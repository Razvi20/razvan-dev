"use client";

import { useState } from "react";
import { Send, Globe, Bot, CheckCircle2, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import { AnimatedSection } from "@/components/templates";

interface ServiceOption {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

const serviceOptions: ServiceOption[] = [
  {
    id: "website",
    icon: Globe,
    label: "I need a website",
    description: "Full-stack web application development",
  },
  {
    id: "ai",
    icon: Bot,
    label: "I want to automate with AI",
    description: "AI agents, chatbots, and automation",
  },
];

function ServiceOptionCard({
  option,
  isSelected,
  onSelect,
}: {
  option: ServiceOption;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`p-4 rounded-xl border text-left transition-all ${
        isSelected
          ? "border-primary bg-primary/5"
          : "border-border bg-secondary/30 hover:border-primary/50"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            isSelected ? "bg-primary/20" : "bg-secondary"
          }`}
        >
          <option.icon
            className={`w-5 h-5 ${
              isSelected ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>
        <div>
          <div
            className={`font-medium ${
              isSelected ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {option.label}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {option.description}
          </div>
        </div>
      </div>
    </button>
  );
}

function SuccessMessage() {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">Message Sent!</h3>
      <p className="text-muted-foreground">
        {"I'll get back to you within 24 hours."}
      </p>
    </div>
  );
}

function ContactForm() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Selection */}
      <div className="space-y-3">
        <Label className="text-foreground">What do you need help with?</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {serviceOptions.map((option) => (
            <ServiceOptionCard
              key={option.id}
              option={option}
              isSelected={selectedService === option.id}
              onSelect={() => setSelectedService(option.id)}
            />
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Name
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            required
            className="bg-secondary border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            className="bg-secondary border-border"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">
          Tell me about your project
        </Label>
        <Textarea
          id="message"
          placeholder="Describe your project, goals, and any specific requirements..."
          rows={4}
          required
          className="bg-secondary border-border resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full gap-2">
        Send Message
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}

export function ContactSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <Container size="narrow">
        <AnimatedSection>
          <SectionHeader
            badge="Get Started"
            title="Let's Build Something Great"
            description="Ready to transform your ideas into reality? Tell me about your project and let's discuss how I can help."
          />
        </AnimatedSection>

        <AnimatedSection
          delay={0.1}
          className="p-6 sm:p-8 rounded-2xl bg-card border border-border"
        >
          <ContactForm />
        </AnimatedSection>
      </Container>
    </section>
  );
}
