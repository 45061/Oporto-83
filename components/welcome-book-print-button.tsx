"use client"

import { Printer } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WelcomeBookPrintButton({ label }: { label: string }) {
  return (
    <Button
      size="lg"
      variant="outline"
      className="border-white/30 bg-white/10 text-white hover:bg-white/15 hover:text-white print:hidden"
      onClick={() => window.print()}
    >
      <Printer className="h-4 w-4" />
      {label}
    </Button>
  )
}
