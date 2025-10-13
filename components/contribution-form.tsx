"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Upload, Loader2 } from "lucide-react"

export function ContributionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate blockchain transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Contribution Submitted",
      description: "Your contribution has been recorded on the blockchain",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Submit Contribution</h2>
          <p className="text-sm text-muted-foreground mt-1">Record your development work on-chain</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Contribution Title</Label>
            <Input id="title" placeholder="e.g., Fixed authentication bug" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Contribution Type</Label>
            <Select required>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bug-fix">Bug Fix</SelectItem>
                <SelectItem value="feature">New Feature</SelectItem>
                <SelectItem value="documentation">Documentation</SelectItem>
                <SelectItem value="optimization">Optimization</SelectItem>
                <SelectItem value="security">Security</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe your contribution..." rows={4} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="repo">Repository URL</Label>
            <Input id="repo" type="url" placeholder="https://github.com/..." required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="commit">Commit Hash</Label>
            <Input id="commit" placeholder="e.g., a1b2c3d4e5f6..." pattern="[a-f0-9]{7,40}" required />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting to Blockchain...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Submit Contribution
              </>
            )}
          </Button>
        </form>
      </div>
    </Card>
  )
}
