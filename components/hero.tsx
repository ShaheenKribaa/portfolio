"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/lib/i18n/language-context"

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  // Display name based on language
  const displayName = language === "ar" ? "شاهين قريبع" : "Kribaa Chahine"
  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : ""}`}
      >
        <Navigation />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-6 py-10 md:py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        <span className="text-primary">{t("hero.greeting")}</span> {displayName}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]">{t("hero.description")}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={scrollToAbout}>
            {t("hero.viewWork")}
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">{t("hero.contactMe")}</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
