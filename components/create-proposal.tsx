"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function CreateProposal() {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "7",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast({
      title: "Proposal Created",
      description: "Your proposal has been submitted to the DAO for voting",
    })

    setFormData({ title: "", description: "", category: "", duration: "7" })
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 border-dashed">
        <Button onClick={() => setIsOpen(true)} variant="outline" className="w-full gap-2">
          <PlusCircle className="w-4 h-4" />
          Create New Proposal
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">Create New Proposal</h3>
          <p className="text-sm text-muted-foreground">Submit a proposal for the DAO to vote on</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Proposal Title</Label>
            <Input
              id="title"
              placeholder="Enter a clear, concise title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide detailed information about your proposal..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={6}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="governance">Governance</SelectItem>
                  <SelectItem value="treasury">Treasury</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Voting Duration</Label>
              <Select
                value={formData.duration}
                onValueChange={(value) => setFormData({ ...formData, duration: value })}
              >
                <SelectTrigger id="duration">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 days</SelectItem>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            Submit Proposal
          </Button>
          <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Note: Creating a proposal requires a minimum of 10,000 governance tokens and will be recorded on-chain.
        </p>
      </form>
    </Card>
  )
}
