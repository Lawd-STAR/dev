"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Copy } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState("")
  const { toast } = useToast()

  const connectWallet = async () => {
    // Simulate wallet connection
    // In production, use ethers.js or web3.js
    const mockAddress = "0x" + Math.random().toString(16).substring(2, 42)
    setAddress(mockAddress)
    setIsConnected(true)

    toast({
      title: "Wallet Connected",
      description: "Successfully connected to your wallet",
    })
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setAddress("")

    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    })
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    })
  }

  const formatAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
  }

  if (!isConnected) {
    return (
      <Button onClick={connectWallet} className="gap-2">
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 bg-transparent">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {formatAddress(address)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={copyAddress} className="gap-2">
          <Copy className="w-4 h-4" />
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Wallet className="w-4 h-4" />
          View on Explorer
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={disconnectWallet} className="text-destructive">
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
