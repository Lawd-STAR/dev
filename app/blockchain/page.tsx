import { Header } from "@/components/header"
import { BlockchainExplorer } from "@/components/blockchain-explorer"
import { BlockchainDatabase } from "@/components/blockchain-database"

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-glow fixed inset-0 pointer-events-none" />
      <div className="grid-pattern fixed inset-0 pointer-events-none opacity-50" />

      <div className="relative">
        <Header />

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Lawd-STAR Blockchain Explorer</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Explore blocks, transactions, and smart contracts on the Lawd-STAR network. Real-time blockchain data
                and analytics.
              </p>
            </div>

            <BlockchainExplorer />
            <BlockchainDatabase />
          </div>
        </section>
      </div>
    </div>
  )
}
