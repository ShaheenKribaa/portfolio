"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Cpu, BookOpen, Globe, Briefcase, Bot } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Skills() {
  const { t, language } = useLanguage()

  const skillCategories = [
    {
      id: 1,
      title: {
        en: "Core Competencies",
        fr: "Compétences Principales",
        ar: "الكفاءات الأساسية",
      },
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      skills: {
        en: ["Problem-Solving", "Rapid Adaptability", "Strong Interpersonal Skills", "Organizational Skills"],
        fr: [
          "Résolution de Problèmes",
          "Adaptabilité Rapide",
          "Fortes Compétences Interpersonnelles",
          "Compétences Organisationnelles",
        ],
        ar: ["حل المشكلات", "التكيف السريع", "مهارات التواصل القوية", "المهارات التنظيمية"],
      },
    },
    {
      id: 2,
      title: {
        en: "Programming Languages",
        fr: "Langages de Programmation",
        ar: "لغات البرمجة",
      },
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: {
        en: ["Python", "JavaScript", "Dart (Flutter)", "SQL"],
        fr: ["Python", "JavaScript", "Dart (Flutter)", "SQL"],
        ar: ["Python", "JavaScript", "Dart (Flutter)", "SQL"],
      },
    },
    {
      id: 3,
      title: {
        en: "Frameworks & Libraries",
        fr: "Frameworks & Bibliothèques",
        ar: "أطر العمل والمكتبات",
      },
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: {
        en: ["React", "Next.js"],
        fr: ["React", "Next.js"],
        ar: ["React", "Next.js"],
      },
    },
    {
      id: 4,
      title: {
        en: "Tools & Technologies",
        fr: "Outils & Technologies",
        ar: "الأدوات والتقنيات",
      },
      icon: <Cpu className="h-8 w-8 text-primary" />,
      skills: {
        en: ["Git", "GitHub", "Firebase", "Supabase"],
        fr: ["Git", "GitHub", "Firebase", "Supabase"],
        ar: ["Git", "GitHub", "Firebase", "Supabase"],
      },
    },
    {
      id: 5,
      title: {
        en: "AI & Design",
        fr: "IA & Design",
        ar: "الذكاء الاصطناعي والتصميم",
      },
      icon: <Bot className="h-8 w-8 text-primary" />,
      skills: {
        en: ["Prompt Engineering", "AI Agents", "Figma", "Responsive Design"],
        fr: ["Ingénierie de Prompts", "Agents IA", "Figma", "Design Responsive"],
        ar: ["هندسة الإرشادات", "وكلاء الذكاء الاصطناعي", "Figma", "التصميم المتجاوب"],
      },
    },
    {
      id: 6,
      title: {
        en: "Languages",
        fr: "Langues",
        ar: "اللغات",
      },
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: {
        en: ["Arabic (Native)", "English (Fluent)", "French (Intermediate)"],
        fr: ["Arabe (Langue Maternelle)", "Anglais (Courant)", "Français (Intermédiaire)"],
        ar: ["العربية (اللغة الأم)", "الإنجليزية (طلاقة)", "الفرنسية (متوسط)"],
      },
    },
    {
      id: 7,
      title: {
        en: "Education",
        fr: "Éducation",
        ar: "التعليم",
      },
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      skills: {
        en: ["Master's in System Information and Decision Support", "Bachelor's in Information Systems"],
        fr: ["Master en Systèmes d'Information et Aide à la Décision", "Licence en Systèmes d'Information"],
        ar: ["ماجستير في نظم المعلومات ودعم القرار", "بكالوريوس في نظم المعلومات"],
      },
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("skills.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {category.title[language as keyof typeof category.title]}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills[language as keyof typeof category.skills].map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
