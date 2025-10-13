"use client"

import { Card } from "@/components/ui/card"
import { GitCommit, Users, Award, TrendingUp } from "lucide-react"

export function ContributionDashboard() {
  const stats = [
    {
      label: "Total Contributions",
      value: "1,247",
      change: "+12.5%",
      icon: GitCommit,
    },
    {
      label: "Active Contributors",
      value: "89",
      change: "+8.2%",
      icon: Users,
    },
    {
      label: "Rewards Distributed",
      value: "45.8K",
      change: "+23.1%",
      icon: Award,
    },
    {
      label: "Network Growth",
      value: "156%",
      change: "+34.7%",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card
            key={stat.label}
            className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-green-500">{stat.change}</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
