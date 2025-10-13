"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Activity, Coins } from "lucide-react"

interface DatabaseStats {
  totalRecords: string
  activeNodes: number
  dataSize: string
  syncStatus: string
}

interface Transaction {
  hash: string
  from: string
  to: string
  value: string
  timestamp: string
  status: "success" | "pending" | "failed"
}

export function BlockchainDatabase() {
  const stats: DatabaseStats = {
    totalRecords: "2.4M",
    activeNodes: 847,
    dataSize: "1.2 TB",
    syncStatus: "100%",
  }

  const recentTransactions: Transaction[] = [
    {
      hash: "0xabc123...def456",
      from: "0x1234...5678",
      to: "0x8765...4321",
      value: "2.5 LSTAR",
      timestamp: "5 sec ago",
      status: "success",
    },
    {
      hash: "0xdef789...ghi012",
      from: "0x2345...6789",
      to: "0x9876...5432",
      value: "0.8 LSTAR",
      timestamp: "12 sec ago",
      status: "success",
    },
    {
      hash: "0xghi345...jkl678",
      from: "0x3456...7890",
      to: "0x0987...6543",
      value: "15.2 LSTAR",
      timestamp: "18 sec ago",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Database className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Blockchain Database</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Database className="w-4 h-4" />
              <span className="text-sm">Total Records</span>
            </div>
            <div className="text-3xl font-bold">{stats.totalRecords}</div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Active Nodes</span>
            </div>
            <div className="text-3xl font-bold">{stats.activeNodes}</div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Database className="w-4 h-4" />
              <span className="text-sm">Data Size</span>
            </div>
            <div className="text-3xl font-bold">{stats.dataSize}</div>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Sync Status</span>
            </div>
            <div className="text-3xl font-bold text-green-500">{stats.syncStatus}</div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recent Transactions</h3>
              <Badge variant="outline" className="gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </Badge>
            </div>

            <div className="space-y-3">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.hash}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50"
                >
                  <div className="space-y-1">
                    <div className="font-mono text-sm">{tx.hash}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{tx.from}</span>
                      <span>→</span>
                      <span>{tx.to}</span>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="font-bold flex items-center gap-2">
                      <Coins className="w-4 h-4 text-primary" />
                      {tx.value}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          tx.status === "success" ? "default" : tx.status === "pending" ? "secondary" : "destructive"
                        }
                        className="text-xs"
                      >
                        {tx.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{tx.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contracts" className="space-y-4">
            <div className="text-center py-12 text-muted-foreground">
              <Database className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Smart contract data will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="tokens" className="space-y-4">
            <div className="text-center py-12 text-muted-foreground">
              <Coins className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Token data will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
