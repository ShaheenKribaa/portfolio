"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t, language } = useLanguage()

  // Display name based on language
  const displayName = language === "ar" ? "شاهين قريبع" : "Kribaa Chahine"
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
          <Link href="/" className="flex items-center">
          <Logo width={60} height={60} />
            </Link>
          </div>
          <div className="flex space-x-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/ShaheenKribaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/chahinekribaa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.home")}
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.about")}
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.projects")}
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.skills")}
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("nav.contact")}
            </Link>
          </div>
          <div className="text-center text-muted-foreground text-sm">
          <p>
          © {new Date().getFullYear()} {displayName}. {t("footer.rights")}
            </p>
            <p className="mt-2">{t("footer.built")}</p>
          </div>
          <Button variant="outline" size="icon" className="mt-8" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
