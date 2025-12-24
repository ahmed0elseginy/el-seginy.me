"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  FolderKanban, 
  Briefcase, 
  GraduationCap,
  Settings,
  User,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const dashboardRoutes = [
  { path: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { path: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { path: "/dashboard/experience", label: "Experience", icon: Briefcase },
  { path: "/dashboard/education", label: "Education", icon: GraduationCap },
  { path: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/dashboard/profile", label: "Profile", icon: User },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-black/50 border-r border-white/[0.08] backdrop-blur-sm hidden lg:block">
      <div className="sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-8">
            Dashboard
          </h2>
          
          <nav className="space-y-2">
            {dashboardRoutes.map((route, index) => {
              const Icon = route.icon;
              const isActive = pathname === route.path;
              
              return (
                <motion.div
                  key={route.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={route.path}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white shadow-lg shadow-orange-500/25"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{route.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}

