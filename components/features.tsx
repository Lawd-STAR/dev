import { Card } from "@/components/ui/card"
import { Shield, Blocks, Cpu, Network, Lock, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Enterprise-grade security with blockchain immutability and cryptographic verification.",
    },
    {
      icon: Blocks,
      title: "Blockchain Integration",
      description: "Seamlessly connect to multiple blockchain networks with unified API access.",
    },
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning models analyze blockchain data in real-time.",
    },
    {
      icon: Network,
      title: "Decentralized Network",
      description: "Distributed architecture ensures high availability and fault tolerance.",
    },
    {
      icon: Lock,
      title: "Smart Contracts",
      description: "Deploy and manage smart contracts with automated execution and verification.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second transaction processing capabilities.",
    },
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">Enterprise-grade Web3 infrastructure</h2>
        <p className="text-lg text-muted-foreground text-balance leading-relaxed">
          Built for developers who demand reliability, security, and scalability in their decentralized applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
