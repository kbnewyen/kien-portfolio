"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-20"
      style={{
        backgroundColor: isScrolled ? "#141412" : "transparent",
        borderBottom: isScrolled ? "0.5px solid rgba(255,255,255,0.08)" : "none",
        transition: "background-color 0.3s ease, border-bottom 0.3s ease",
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="text-xs uppercase tracking-[0.2em] text-foreground font-normal"
        >
          Kien Nguyen
        </Link>
        <div className="hidden md:flex items-center gap-8">
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
