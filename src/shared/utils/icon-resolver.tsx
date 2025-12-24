import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

// Icon resolver utility to dynamically get icons from string names
export function getIconComponent(
  iconName: string,
  iconMap: Record<string, ComponentType<any> | LucideIcon>
): ComponentType<any> | LucideIcon | null {
  return iconMap[iconName] || null;
}

