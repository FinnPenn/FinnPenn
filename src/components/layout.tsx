import React from "react"
// Import your navigation or theme toggles here if you have them
import { ModeToggle } from "./mode-toggle" 

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="p-8 min-h-screen bg-muted/40">
        <div className="rounded-3xl min-h-screen bg-card text-card-foreground shadow-sm border p-6">
            {children}
        </div>
    </main>
  )
}