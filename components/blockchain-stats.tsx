"use client"

import { Card } from "@/components/ui/card"
import { Activity, Database, Lock, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function BlockchainStats() {
  const [stats, setStats] = useState({
    transactions: 0,
    blockHeight: 0,
    gasPrice: 0,
    activeNodes: 0,
  })

  useEffect(() => {
    // Simulate real-time blockchain data
    const interval = setInterval(() => {
      setStats({
        transactions: Math.floor(Math.random() * 1000000) + 5000000,
        blockHeight: Math.floor(Math.random() * 100000) + 18000000,
        gasPrice: Math.floor(Math.random() * 50) + 20,
        activeNodes: Math.floor(Math.random() * 500) + 8500,
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const statItems = [
    {
      icon: Activity,
      label: "Total Transactions",
      value: stats.transactions.toLocaleString(),
      color: "text-primary",
    },
    {
      icon: Database,
      label: "Block Height",
      value: stats.blockHeight.toLocaleString(),
      color: "text-accent",
    },
    {
      icon: Zap,
      label: "Gas Price",
      value: `${stats.gasPrice} Gwei`,
      color: "text-chart-4",
    },
    {
      icon: Lock,
      label: "Active Nodes",
      value: stats.activeNodes.toLocaleString(),
      color: "text-chart-2",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statItems.map((item, index) => (
          <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-secondary/50 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
