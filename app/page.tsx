import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { BlockchainStats } from "@/components/blockchain-stats"
import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitBranch } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-glow fixed inset-0 pointer-events-none" />
      <div className="grid-pattern fixed inset-0 pointer-events-none opacity-50" />

      <div className="relative">
        <Header />
        <Hero />
        <BlockchainStats />

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <GitBranch className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Start Contributing Today</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join our developer community and earn rewards for your contributions. Track your impact on the
                blockchain.
              </p>
              <Link href="/contributions">
                <Button size="lg" className="gap-2">
                  View Contributions Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Features />
      </div>
    </div>
  )
}
