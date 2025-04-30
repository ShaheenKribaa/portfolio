"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "@/app/actions/send-email"
import { useLanguage } from "@/lib/i18n/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isPending, setIsPending] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    setFormStatus("idle")
    setIsPending(true)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setIsPending(false)
        setFormStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        toast({
          title: t("contact.messageSent"),
          description: t("contact.thankYou"),
          variant: "default",
        })

        // Reset form status after 3 seconds
        setTimeout(() => {
          setFormStatus("idle")
        }, 3000)
      } else {
        setIsPending(false)
        setFormStatus("error")
        toast({
          title: t("contact.error"),
          description: result.error || t("contact.errorMessage"),
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setIsPending(false)
      setFormStatus("error")
      toast({
        title: t("contact.error"),
        description: t("contact.errorMessage"),
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">        
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("contact.title")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card>
            <CardHeader>
            <CardTitle>{t("contact.contactInfo")}</CardTitle>
            <CardDescription>{t("contact.contactChannels")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                  <p className="font-medium">shaheenkribaa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                  <p className="font-medium">+213 792017211</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                  <p className="font-medium">AL KHROUB — Constantine, 25026, Algeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/chahinekribaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3216.6042930817935!2d6.7108212!3d36.2733848!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdz!4v1744281528900!5m2!1sen!2sdz"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <CardTitle>{t("contact.sendMessage")}</CardTitle>
            <CardDescription>{t("contact.getBack")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                    {t("contact.yourName")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                    {t("contact.yourEmail")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                  {t("contact.subject")}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                  {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isPending}
                  />
                </div>
                <Button type="submit" className="w-full gap-2" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t("contact.sending")}
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      {t("contact.sent")}
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <AlertCircle className="h-4 w-4" />
                      {t("contact.tryAgain")}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t("contact.send")}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
