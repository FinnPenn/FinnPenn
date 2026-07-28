import React from "react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="p-8 min-h-screen bg-muted/40">
        <div className="rounded-3xl bg-card text-card-foreground shadow-sm border">
            {children}
        </div>
    </main>
  )
}