"use client"

import { Header } from "@/components/header"
import { DaoOverview } from "@/components/dao-overview"
import { ProposalList } from "@/components/proposal-list"
import { CreateProposal } from "@/components/create-proposal"
import { TreasuryManagement } from "@/components/treasury-management"

export default function DaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              DAO <span className="text-primary">Governance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Participate in decentralized decision-making. Create proposals, vote on initiatives, and manage the
              treasury.
            </p>
          </div>

          <DaoOverview />
          <TreasuryManagement />
          <CreateProposal />
          <ProposalList />
        </div>
      </main>
    </div>
  )
}
