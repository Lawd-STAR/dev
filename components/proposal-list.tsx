"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ThumbsUp, ThumbsDown, Clock, CheckCircle2, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type ProposalStatus = "active" | "passed" | "rejected" | "pending"

interface Proposal {
  id: number
  title: string
  description: string
  proposer: string
  status: ProposalStatus
  votesFor: number
  votesAgainst: number
  totalVotes: number
  endDate: string
  category: string
}

export function ProposalList() {
  const { toast } = useToast()
  const [proposals, setProposals] = useState<Proposal[]>([
    {
      id: 1,
      title: "Increase Developer Rewards by 20%",
      description:
        "Proposal to increase the monthly developer reward pool from 100K to 120K tokens to attract more contributors.",
      proposer: "0x1234...5678",
      status: "active",
      votesFor: 15420,
      votesAgainst: 3240,
      totalVotes: 18660,
      endDate: "2025-01-20",
      category: "Treasury",
    },
    {
      id: 2,
      title: "Implement New Governance Framework",
      description: "Adopt a new quadratic voting system to ensure fairer representation of community interests.",
      proposer: "0x8765...4321",
      status: "active",
      votesFor: 12800,
      votesAgainst: 8200,
      totalVotes: 21000,
      endDate: "2025-01-18",
      category: "Governance",
    },
    {
      id: 3,
      title: "Partnership with DeFi Protocol",
      description: "Establish strategic partnership with leading DeFi protocol to expand ecosystem integration.",
      proposer: "0xabcd...efgh",
      status: "passed",
      votesFor: 28500,
      votesAgainst: 4200,
      totalVotes: 32700,
      endDate: "2025-01-10",
      category: "Partnership",
    },
    {
      id: 4,
      title: "Reduce Proposal Threshold",
      description: "Lower the minimum token requirement for creating proposals from 10K to 5K tokens.",
      proposer: "0x9876...1234",
      status: "rejected",
      votesFor: 8400,
      votesAgainst: 18600,
      totalVotes: 27000,
      endDate: "2025-01-08",
      category: "Governance",
    },
  ])

  const handleVote = (proposalId: number, voteType: "for" | "against") => {
    toast({
      title: "Vote Submitted",
      description: `Your vote has been recorded on-chain for proposal #${proposalId}`,
    })
  }

  const getStatusIcon = (status: ProposalStatus) => {
    switch (status) {
      case "active":
        return <Clock className="w-4 h-4" />
      case "passed":
        return <CheckCircle2 className="w-4 h-4" />
      case "rejected":
        return <XCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: ProposalStatus) => {
    switch (status) {
      case "active":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "passed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "rejected":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Active Proposals</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All
          </Button>
          <Button variant="ghost" size="sm">
            Active
          </Button>
          <Button variant="ghost" size="sm">
            Closed
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {proposals.map((proposal) => {
          const votePercentage = (proposal.votesFor / proposal.totalVotes) * 100

          return (
            <Card
              key={proposal.id}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className={getStatusColor(proposal.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(proposal.status)}
                          {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                        </span>
                      </Badge>
                      <Badge variant="outline">{proposal.category}</Badge>
                      <span className="text-xs text-muted-foreground">Proposal #{proposal.id}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{proposal.title}</h3>
                    <p className="text-sm text-muted-foreground">{proposal.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Proposed by {proposal.proposer}</span>
                      <span>•</span>
                      <span>Ends {proposal.endDate}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Voting Progress</span>
                    <span className="text-foreground font-medium">
                      {proposal.votesFor.toLocaleString()} / {proposal.totalVotes.toLocaleString()} votes
                    </span>
                  </div>
                  <Progress value={votePercentage} className="h-2" />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3 text-green-500" />
                      {votePercentage.toFixed(1)}% For
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsDown className="w-3 h-3 text-red-500" />
                      {(100 - votePercentage).toFixed(1)}% Against
                    </span>
                  </div>
                </div>

                {proposal.status === "active" && (
                  <div className="flex gap-2 pt-2">
                    <Button onClick={() => handleVote(proposal.id, "for")} className="flex-1 gap-2" variant="default">
                      <ThumbsUp className="w-4 h-4" />
                      Vote For
                    </Button>
                    <Button
                      onClick={() => handleVote(proposal.id, "against")}
                      className="flex-1 gap-2"
                      variant="outline"
                    >
                      <ThumbsDown className="w-4 h-4" />
                      Vote Against
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
