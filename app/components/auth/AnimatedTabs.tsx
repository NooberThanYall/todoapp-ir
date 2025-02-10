'use client'

import { useState } from "react"
import { motion } from 'framer-motion'
import Link from "next/link"
import { usePathname } from "next/navigation"

function AnimatedTabs({ tabs }) {
  const pathname = usePathname()
  const route = pathname.slice(6)

  // Find the first matching tab or fallback to the first tab
  const defaultTab = tabs.find(tab => tab.id === route)?.id || tabs[0]?.id || ""

  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className="flex space-x-2 p-1  rounded-full" style={{
      backgroundColor: '#0E2338'
    }}>
      {tabs.map((tab) => (
        <Link href={`/auth/${tab.id}`} key={tab.id}>
          <button
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative rounded-full px-4 py-2 text-base font-medium
              transition-colors duration-200
              ${activeTab === tab.id ? "text-white" : "text-white hover:text-white/70"}
              outline-sky-400 focus-visible:outline-2
            `}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 "
                style={{ borderRadius: 9999, backgroundColor: '#25384B' }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{tab.label}</span>
          </button>
        </Link>
      ))}
    </div>
  )
}

export default AnimatedTabs


