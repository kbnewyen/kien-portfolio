import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ECapitalCheckoutPage() {
  return (
    <main className="min-h-screen bg-[#141412] px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-[#5a5a50] hover:text-[#EDE8DC] transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#EDE8DC] mb-6">
          eCapital Checkout
        </h1>
        
        <p className="text-sm text-[#5a5a50]">
          Case study coming soon
        </p>
      </div>
    </main>
  )
}
