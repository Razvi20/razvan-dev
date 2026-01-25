import { LucideIcon } from "lucide-react";
import { IconBox } from "./IconBox";

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function MetricCard({ icon, value, label }: MetricCardProps) {
  return (
    <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-4">
      <IconBox icon={icon} size="sm" className="border-0" />
      <div>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
