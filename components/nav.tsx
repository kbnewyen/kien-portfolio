"use client"

import Link from "next/link"

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="text-xs uppercase tracking-[0.2em] text-foreground font-normal"
        >
          Kien Nguyen
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            href="#work" 
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link 
            href="#about" 
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
