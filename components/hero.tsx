"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Product · Design · Strategy
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-foreground">
          Making
          <br />
          products
          <br />
          <span className="text-destructive">that ship.</span>
        </h1>
        <p className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-md">
          8 years in software. Based in San Diego.
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}
