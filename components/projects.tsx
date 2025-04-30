"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export function Projects() {
  const { t, language } = useLanguage()

  const projects = [
    {
      id: 1,
      title: {
        en: "E-Learning Web App",
        fr: "Application Web E-Learning",
        ar: "تطبيق ويب للتعلم الإلكتروني",
      },
      description: {
        en: "Built a modern web application that allows students to reserve 1-on-1 sessions with teachers. Used Next.js for the frontend and Supabase for backend and authentication. Integrated modern UI/UX principles using Figma and responsive design practices.",
        fr: "Création d'une application web moderne permettant aux étudiants de réserver des sessions individuelles avec des enseignants. Utilisation de Next.js pour le frontend et Supabase pour le backend et l'authentification. Intégration des principes modernes d'UI/UX avec Figma et des pratiques de conception responsive.",
        ar: "بناء تطبيق ويب حديث يسمح للطلاب بحجز جلسات فردية مع المعلمين. استخدام Next.js للواجهة الأمامية و Supabase للخلفية والمصادقة. دمج مبادئ واجهة المستخدم/تجربة المستخدم الحديثة باستخدام Figma وممارسات التصميم المتجاوب.",
      },
      image: "\E_Learning.png",
      tags: ["Next.js", "Supabase", "Figma", "UI/UX", "Responsive Design"],
      demoUrl: "#",
      githubUrl: "#",
      date: {
        en: "November 2024 - February 2025",
        fr: "Novembre 2024 - Février 2025",
        ar: "نوفمبر 2024 - فبراير 2025",
      },
    },
    {
      id: 2,
      title: {
        en: "Team Orienteering Problem with Time Windows (TOPTW)",
        fr: "Problème d'Orientation d'Équipe avec Fenêtres Temporelles (TOPTW)",
        ar: "مشكلة توجيه الفريق مع النوافذ الزمنية (TOPTW)",
      },
      description: {
        en: "Developed a new solution for the Team Orienteering Problem with Time Windows using Iterated Local Search (ILS) in Python with various optimization techniques.",
        fr: "Développement d'une nouvelle solution pour le Problème d'Orientation d'Équipe avec Fenêtres Temporelles en utilisant la Recherche Locale Itérée (ILS) en Python avec diverses techniques d'optimisation.",
        ar: "تطوير حل جديد لمشكلة توجيه الفريق مع النوافذ الزمنية باستخدام البحث المحلي المتكرر (ILS) في Python مع تقنيات تحسين مختلفة.",
      },
      image: "/toptw.png",
      tags: ["Python", "Optimization", "Algorithms", "Data Analysis"],
      demoUrl: "#",
      githubUrl: "#",
      date: {
        en: "January 2024 - August 2024",
        fr: "Janvier 2024 - Août 2024",
        ar: "يناير 2024 - أغسطس 2024",
      },
    },
    {
      id: 3,
      title: {
        en: "Chat Room Application",
        fr: "Application de Salon de Discussion",
        ar: "تطبيق غرفة الدردشة",
      },
      description: {
        en: "Created a chat room application using Java with a client-server architecture. Designed and developed features for user management and message handling with robust connection stability.",
        fr: "Création d'une application de salon de discussion en Java avec une architecture client-serveur. Conception et développement de fonctionnalités pour la gestion des utilisateurs et le traitement des messages avec une stabilité de connexion robuste.",
        ar: "إنشاء تطبيق غرفة دردشة باستخدام Java مع بنية خادم-عميل. تصميم وتطوير ميزات لإدارة المستخدمين ومعالجة الرسائل مع استقرار اتصال قوي.",
      },
      image: "/chatroom.png",
      tags: ["Java", "Client-Server", "Networking", "UI Design"],
      demoUrl: "#",
      githubUrl: "#",
      date: {
        en: "January 2021 - June 2021",
        fr: "Janvier 2021 - Juin 2021",
        ar: "يناير 2021 - يونيو 2021",
      },
    },
    {
      id: 4,
      title: {
        en: "Genetic Algorithms Implementation",
        fr: "Implémentation d'Algorithmes Génétiques",
        ar: "تنفيذ الخوارزميات الجينية",
      },
      description: {
        en: "Applied genetic algorithms to solve complex optimization problems using Python. Developed and tested over 5 different genetic algorithm strategies to optimize performance.",
        fr: "Application d'algorithmes génétiques pour résoudre des problèmes d'optimisation complexes en utilisant Python. Développement et test de plus de 5 stratégies différentes d'algorithmes génétiques pour optimiser les performances.",
        ar: "تطبيق الخوارزميات الجينية لحل مشاكل التحسين المعقدة باستخدام Python. تطوير واختبار أكثر من 5 استراتيجيات مختلفة للخوارزميات الجينية لتحسين الأداء.",
      },
      image: "/genetic_algo.png",
      tags: ["Python", "Genetic Algorithms", "Optimization"],
      demoUrl: "#",
      githubUrl: "#",
      date: {
        en: "2022",
        fr: "2022",
        ar: "2022",
      },
    },
    {
      id: 5,
      title: {
        en: "Warehouse Management System",
        fr: "Système de Gestion d'Entrepôt",
        ar: "نظام إدارة المستودعات",
      },
      description: {
        en: "Developed a warehouse management system using SQL Developer and Java, optimizing inventory management and order processing. Designed and implemented database structures and user interfaces.",
        fr: "Développement d'un système de gestion d'entrepôt utilisant SQL Developer et Java, optimisant la gestion des stocks et le traitement des commandes. Conception et implémentation de structures de base de données et d'interfaces utilisateur.",
        ar: "تطوير نظام إدارة مستودعات باستخدام SQL Developer و Java، مما يحسن إدارة المخزون ومعالجة الطلبات. تصميم وتنفيذ هياكل قواعد البيانات وواجهات المستخدم.",
      },
      image: "/warehouse_manag.png",
      tags: ["Java", "SQL", "Database Design", "UI/UX"],
      demoUrl: "#",
      githubUrl: "#",
      date: {
        en: "2021-2023",
        fr: "2021-2023",
        ar: "2021-2023",
      },
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("projects.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title[language as keyof typeof project.title]}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title[language as keyof typeof project.title]}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.date[language as keyof typeof project.date]}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{project.description[language as keyof typeof project.description]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    {t("projects.code")}
                  </a>
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    {t("projects.demo")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
