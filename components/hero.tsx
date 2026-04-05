"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex relative overflow-hidden">
      {/* Left side - Text content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Product · Design · Strategy
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-foreground">
            Making
            <br />
            products
            <br />
            <span className="text-destructive">that win.</span>
          </h1>
          <p className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-md">
            8 years in software. Based in San Diego.
          </p>
        </div>
      </div>

      {/* Right side - Photo panel */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2">
        <Image
          src="/kien.jpg"
          alt="Kien"
          fill
          className="object-cover object-[center_top]"
          priority
        />
        {/* Gradient fade on left edge */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #141412 0%, transparent 45%)'
          }}
        />
      </div>
      
      <div className="absolute bottom-12 left-1/2 lg:left-1/4 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}
