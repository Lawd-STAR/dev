import { Header } from "@/components/header"
import { ContributionDashboard } from "@/components/contribution-dashboard"
import { ContributionForm } from "@/components/contribution-form"
import { ContributorLeaderboard } from "@/components/contributor-leaderboard"

export default function ContributionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-glow fixed inset-0 pointer-events-none" />
      <div className="grid-pattern fixed inset-0 pointer-events-none opacity-50" />

      <div className="relative">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Page Header */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Developer Contributions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Track, submit, and reward developer contributions on the blockchain
              </p>
            </div>

            {/* Dashboard Stats */}
            <ContributionDashboard />

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contribution Form */}
              <ContributionForm />

              {/* Leaderboard */}
              <ContributorLeaderboard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
