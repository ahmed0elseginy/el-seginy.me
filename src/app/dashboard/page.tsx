"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FolderKanban, 
  Briefcase, 
  GraduationCap, 
  TrendingUp,
  Eye,
  Code
} from "lucide-react";

const stats = [
  { label: "Total Projects", value: "6", icon: FolderKanban, color: "text-orange-400" },
  { label: "Experience", value: "3+", icon: Briefcase, color: "text-teal-400" },
  { label: "Education", value: "2", icon: GraduationCap, color: "text-blue-400" },
  { label: "Skills", value: "30+", icon: Code, color: "text-purple-400" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border-white/[0.08] backdrop-blur-sm hover:border-white/[0.15] transition-all">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-black/50 border-white/[0.08] backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
            <CardDescription>Your latest portfolio updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
                <div className="flex-1">
                  <p className="text-sm text-white">Added new project</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#4ecdc4]" />
                <div className="flex-1">
                  <p className="text-sm text-white">Updated experience</p>
                  <p className="text-xs text-gray-400">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-white/[0.08] backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all">
                Add New Project
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all">
                Update Profile
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all">
                View Analytics
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

