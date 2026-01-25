import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <Badge variant="outline" className="mb-4 bg-transparent">
        {badge}
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-balance",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
