"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Box, Clock, Hash, ArrowRight } from "lucide-react"
import { useState } from "react"

interface Block {
  number: number
  hash: string
  timestamp: string
  transactions: number
  validator: string
  gasUsed: string
}

export function BlockchainExplorer() {
  const [searchQuery, setSearchQuery] = useState("")

  const recentBlocks: Block[] = [
    {
      number: 15847392,
      hash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385",
      timestamp: "12 seconds ago",
      transactions: 247,
      validator: "0x1234...5678",
      gasUsed: "12.5M",
    },
    {
      number: 15847391,
      hash: "0x8a1bfde2d1e68b8bg77bc5fbe8a1bfde2d1e68b8bg77bc5fbe9d3d3fc8c22b02496",
      timestamp: "24 seconds ago",
      transactions: 189,
      validator: "0x2345...6789",
      gasUsed: "10.2M",
    },
    {
      number: 15847390,
      hash: "0x9b2cgef3e2f79c9ch88cd6gcf9b2cgef3e2f79c9ch88cd6gcf0e4e4gd9d33c13507",
      timestamp: "36 seconds ago",
      transactions: 312,
      validator: "0x3456...7890",
      gasUsed: "14.8M",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by Block / Txn Hash / Address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50"
            />
          </div>
          <Button className="gap-2">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </Card>

      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Box className="w-6 h-6 text-primary" />
            Recent Blocks
          </h2>
          <Badge variant="outline" className="gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live
          </Badge>
        </div>

        {recentBlocks.map((block) => (
          <Card
            key={block.number}
            className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                    <Box className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Block</div>
                    <div className="font-mono font-bold text-lg">{block.number.toLocaleString()}</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Hash className="w-4 h-4" />
                    Hash
                  </div>
                  <div className="font-mono text-sm break-all text-foreground/80">{block.hash}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{block.timestamp}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Transactions</div>
                    <div className="font-bold text-primary">{block.transactions}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Gas Used</div>
                    <div className="font-bold">{block.gasUsed}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground">Validator</div>
                  <div className="font-mono text-sm">{block.validator}</div>
                </div>

                <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
