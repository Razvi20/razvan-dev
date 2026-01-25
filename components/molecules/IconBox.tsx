import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10 rounded-lg",
  md: "w-12 h-12 rounded-xl",
  lg: "w-14 h-14 rounded-xl",
};

const iconSizeClasses = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
};

export function IconBox({ icon: Icon, size = "md", className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0",
        sizeClasses[size],
        className
      )}
    >
      <Icon className={cn("text-primary", iconSizeClasses[size])} />
    </div>
  );
}
