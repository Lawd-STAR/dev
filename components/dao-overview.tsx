"use client"

import { Card } from "@/components/ui/card"
import { Users, Vote, Coins, TrendingUp } from "lucide-react"

export function DaoOverview() {
  const stats = [
    {
      label: "Total Members",
      value: "1,247",
      change: "+12%",
      icon: Users,
    },
    {
      label: "Active Proposals",
      value: "8",
      change: "+2",
      icon: Vote,
    },
    {
      label: "Treasury Balance",
      value: "2.4M USDC",
      change: "+8.3%",
      icon: Coins,
    },
    {
      label: "Voting Power",
      value: "15,420",
      change: "Your tokens",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-primary">{stat.change}</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
