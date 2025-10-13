"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function TreasuryManagement() {
  const treasuryAssets = [
    { token: "USDC", amount: "1,240,000", value: "$1,240,000", change: "+5.2%" },
    { token: "ETH", amount: "420", value: "$840,000", change: "+12.8%" },
    { token: "MATIC", amount: "850,000", value: "$320,000", change: "-2.4%" },
  ]

  const recentTransactions = [
    { type: "in", description: "Developer Rewards Distribution", amount: "-50,000 USDC", date: "2 hours ago" },
    { type: "in", description: "Protocol Revenue", amount: "+125,000 USDC", date: "1 day ago" },
    { type: "out", description: "Marketing Campaign", amount: "-30,000 USDC", date: "3 days ago" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Treasury Management</h2>
        <Button variant="outline" size="sm">
          View Full Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Treasury Assets</h3>
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Coins className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="space-y-3">
              {treasuryAssets.map((asset) => (
                <div
                  key={asset.token}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{asset.token}</p>
                    <p className="text-xs text-muted-foreground">{asset.amount} tokens</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-semibold text-foreground">{asset.value}</p>
                    <p
                      className={`text-xs flex items-center gap-1 ${asset.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                    >
                      {asset.change.startsWith("+") ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {asset.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>

            <div className="space-y-3">
              {recentTransactions.map((tx, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                >
                  <div
                    className={`p-2 rounded-lg ${tx.type === "in" ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}
                  >
                    {tx.type === "in" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">{tx.description}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                  <p
                    className={`text-sm font-semibold ${tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                  >
                    {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
