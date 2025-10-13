import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
          <Sparkles className="w-4 h-4" />
          <span>Powered by Lawd-STAR Blockchain</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
          Build the future with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Lawd-STAR Network
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
          Lawd-STAR combines blockchain technology with decentralized intelligence to create secure, transparent, and
          scalable Web3 applications for the autonomous world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="gap-2 text-base">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  )
}
