"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type React from "react"

interface LayeredTextProps {
  lines?: Array<{ top: string; bottom: string }>
  fontSize?: string
  lineHeight?: number
  className?: string
  /** Auto-play the reveal every N ms (default 10 000). Set 0 to disable. */
  autoPlayMs?: number
}

const SITE_LINES: Array<{ top: string; bottom: string }> = [
  { top: "\u00A0",        bottom: "EVERY TOOL"   },
  { top: "EVERY TOOL",   bottom: "ONE PLACE"    },
  { top: "ONE PLACE",    bottom: "ZERO UPLOADS" },
  { top: "ZERO UPLOADS", bottom: "NO ACCOUNTS"  },
  { top: "NO ACCOUNTS",  bottom: "NO TRACKING"  },
  { top: "NO TRACKING",  bottom: "JUST TOOLS"   },
  { top: "JUST TOOLS",   bottom: "\u00A0"        },
]

export function LayeredText({
  lines = SITE_LINES,
  fontSize = "52px",
  lineHeight = 56,
  className = "",
  autoPlayMs = 10000,
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const tlRef       = useRef<gsap.core.Timeline | null>(null)
  const hoverRef    = useRef(false)

  const calculateTranslateX = (index: number) => {
    const center = Math.floor(lines.length / 2)
    return (index - center) * 30
  }

  useEffect(() => {
    if (!containerRef.current) return
    const container  = containerRef.current
    const paragraphs = container.querySelectorAll("p")

    tlRef.current = gsap.timeline({ paused: true })
    tlRef.current.to(paragraphs, {
      y: -lineHeight,
      duration: 0.75,
      ease: "power2.out",
      stagger: 0.07,
    })

    const play    = () => { hoverRef.current = true;  tlRef.current?.play() }
    const reverse = () => { hoverRef.current = false; tlRef.current?.reverse() }

    container.addEventListener("mouseenter", play)
    container.addEventListener("mouseleave", reverse)

    // Auto-play every N seconds
    let timer: ReturnType<typeof setInterval> | null = null
    if (autoPlayMs > 0) {
      timer = setInterval(() => {
        if (hoverRef.current) return          // don't interrupt manual hover
        const dur = (tlRef.current?.duration() ?? 1) * 1000
        tlRef.current?.play()
        setTimeout(() => {
          if (!hoverRef.current) tlRef.current?.reverse()
        }, dur + 800)
      }, autoPlayMs)
    }

    return () => {
      container.removeEventListener("mouseenter", play)
      container.removeEventListener("mouseleave", reverse)
      tlRef.current?.kill()
      if (timer) clearInterval(timer)
    }
  }, [lines, lineHeight, autoPlayMs])

  return (
    <div
      ref={containerRef}
      className={`font-black tracking-[-2px] uppercase antialiased cursor-pointer select-none ${className}`}
      style={{ fontSize } as React.CSSProperties}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {lines.map((line, index) => {
          const tx = calculateTranslateX(index)
          return (
            <li
              key={index}
              className="overflow-hidden relative"
              style={{
                height: `${lineHeight}px`,
                transform: `translateX(${tx}px) skew(${index % 2 === 0 ? "60deg,-30deg" : "0deg,-30deg"}) scaleY(${index % 2 === 0 ? 0.66667 : 1.33333})`,
              }}
            >
              <p
                className="px-3 whitespace-nowrap m-0 align-top"
                style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 4}px` }}
              >
                {line.top}
              </p>
              <p
                className="px-3 whitespace-nowrap m-0 align-top"
                style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 4}px` }}
              >
                {line.bottom}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
