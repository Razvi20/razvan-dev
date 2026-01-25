import { LucideIcon } from "lucide-react";
import { IconBox } from "./IconBox";

interface CertificationBadgeProps {
  name: string;
  title: string;
  icon: LucideIcon;
}

export function CertificationBadge({
  name,
  title,
  icon,
}: CertificationBadgeProps) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-card border border-border">
      <IconBox icon={icon} size="sm" className="border-0" />
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground max-w-[200px] truncate">
          {title}
        </div>
      </div>
    </div>
  );
}
