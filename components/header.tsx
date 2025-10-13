"use client"
import { WalletConnect } from "@/components/wallet-connect"
import { Cable as Cube } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
              <Cube className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Lawd-STAR</h1>
              <p className="text-xs text-muted-foreground">Blockchain Network</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              href="/contributions"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contributions
            </Link>
            <Link href="/dao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              DAO
            </Link>
            <Link href="/blockchain" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blockchain
            </Link>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
          </nav>

          <WalletConnect />
        </div>
      </div>
    </header>
  )
}
