"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

export function ContributorLeaderboard() {
  const contributors = [
    {
      rank: 1,
      name: "Alice Chen",
      address: "0x1234...5678",
      contributions: 156,
      rewards: "12.5K",
      badge: "gold",
    },
    {
      rank: 2,
      name: "Bob Smith",
      address: "0x8765...4321",
      contributions: 142,
      rewards: "11.2K",
      badge: "silver",
    },
    {
      rank: 3,
      name: "Carol Davis",
      address: "0xabcd...efgh",
      contributions: 128,
      rewards: "9.8K",
      badge: "bronze",
    },
    {
      rank: 4,
      name: "David Wilson",
      address: "0x9876...1234",
      contributions: 98,
      rewards: "7.5K",
      badge: null,
    },
    {
      rank: 5,
      name: "Eve Martinez",
      address: "0x5678...9012",
      contributions: 87,
      rewards: "6.8K",
      badge: null,
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 3:
        return <Award className="w-5 h-5 text-orange-600" />
      default:
        return <span className="text-muted-foreground font-semibold">#{rank}</span>
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Top Contributors</h2>
          <p className="text-sm text-muted-foreground mt-1">Leading developers this month</p>
        </div>

        <div className="space-y-3">
          {contributors.map((contributor) => (
            <div
              key={contributor.address}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-center w-8">{getRankIcon(contributor.rank)}</div>

              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                  {getInitials(contributor.name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold truncate">{contributor.name}</p>
                  {contributor.badge && (
                    <Badge
                      variant="outline"
                      className={
                        contributor.badge === "gold"
                          ? "border-yellow-500 text-yellow-500"
                          : contributor.badge === "silver"
                            ? "border-gray-400 text-gray-400"
                            : "border-orange-600 text-orange-600"
                      }
                    >
                      {contributor.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-mono">{contributor.address}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold">{contributor.contributions}</p>
                <p className="text-xs text-muted-foreground">contributions</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-primary">{contributor.rewards}</p>
                <p className="text-xs text-muted-foreground">tokens</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
