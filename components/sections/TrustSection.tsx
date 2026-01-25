import { Award, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/atoms";
import { CertificationBadge } from "@/components/molecules";

const certifications = [
  {
    name: "NCA-AIIO",
    title: "NVIDIA Certified Associate - AI Infrastructure and Operations",
    icon: Award,
  },
  {
    name: "NCA-GENL",
    title: "NVIDIA Certified Associate - Generative AI LLMs",
    icon: Award,
  },
];

// Server Component - no client-side JS needed
export function TrustSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border bg-secondary/30">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Verified Certifications
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {certifications.map((cert) => (
              <CertificationBadge
                key={cert.name}
                name={cert.name}
                title={cert.title}
                icon={cert.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
