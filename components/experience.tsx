"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Experience() {
  const { t, language } = useLanguage()

  const experiences = [
    {
      id: 1,
      title: {
        en: "Freelance Web Developer & AI Solutions Engineer",
        fr: "Développeur Web Freelance & Ingénieur Solutions IA",
        ar: "مطور ويب مستقل ومهندس حلول الذكاء الاصطناعي",
      },
      company: "Remote",
      location: {
        en: "Remote",
        fr: "À distance",
        ar: "عن بعد",
      },
      period: {
        en: "January 2024 - Present",
        fr: "Janvier 2024 - Présent",
        ar: "يناير 2024 - الحاضر",
      },
      description: {
        en: [
          "Designed and developed responsive web applications using Next.js and Supabase, including a feature-rich e-learning platform for student-teacher interaction.",
          "Specialized in creating and fine-tuning AI agents to automate tasks and solve complex problems rapidly using prompt engineering techniques.",
          "Worked closely with clients to gather requirements, develop scalable solutions, and deliver high-quality results under tight deadlines.",
          "Utilized Figma and other design tools to craft intuitive user interfaces and improve user experiences.",
        ],
        fr: [
          "Conception et développement d'applications web réactives utilisant Next.js et Supabase, incluant une plateforme e-learning riche en fonctionnalités pour l'interaction étudiant-enseignant.",
          "Spécialisé dans la création et l'optimisation d'agents IA pour automatiser les tâches et résoudre rapidement des problèmes complexes en utilisant des techniques d'ingénierie de prompts.",
          "Travail en étroite collaboration avec les clients pour recueillir les exigences, développer des solutions évolutives et livrer des résultats de haute qualité dans des délais serrés.",
          "Utilisation de Figma et d'autres outils de conception pour créer des interfaces utilisateur intuitives et améliorer l'expérience utilisateur.",
        ],
        ar: [
          "تصميم وتطوير تطبيقات ويب متجاوبة باستخدام Next.js و Supabase، بما في ذلك منصة تعليم إلكتروني غنية بالميزات للتفاعل بين الطلاب والمعلمين.",
          "متخصص في إنشاء وتحسين وكلاء الذكاء الاصطناعي لأتمتة المهام وحل المشكلات المعقدة بسرعة باستخدام تقنيات هندسة الإرشادات.",
          "عمل بشكل وثيق مع العملاء لجمع المتطلبات وتطوير حلول قابلة للتوسع وتقديم نتائج عالية الجودة ضمن مواعيد نهائية ضيقة.",
          "استخدام Figma وأدوات تصميم أخرى لإنشاء واجهات مستخدم بديهية وتحسين تجارب المستخدم.",
        ],
      },
      type: "work",
    },
    {
      id: 2,
      title: {
        en: "IT Intern",
        fr: "Stagiaire en Informatique",
        ar: "متدرب تكنولوجيا المعلومات",
      },
      company: "Algerie Qatari Steel",
      location: {
        en: "Milia, Jijel",
        fr: "Milia, Jijel",
        ar: "ميليا، جيجل",
      },
      period: {
        en: "July 2021 - October 2021",
        fr: "Juillet 2021 - Octobre 2021",
        ar: "يوليو 2021 - أكتوبر 2021",
      },
      description: {
        en: [
          "Gained hands-on experience with SAP ERP systems under the supervision of PwC and Seidor, contributing to the implementation of ERP solutions across 5 major departments.",
          "Collaborated with a team of 10+ IT professionals, enhancing teamwork skills and adapting to the organizational culture of a multinational company.",
          "Assisted with system configuration tasks, troubleshooting issues, and providing support.",
          "Participated in key project that optimized ERP functionalities.",
        ],
        fr: [
          "Acquis une expérience pratique avec les systèmes SAP ERP sous la supervision de PwC et Seidor, contribuant à la mise en œuvre de solutions ERP dans 5 départements majeurs.",
          "Collaboration avec une équipe de plus de 10 professionnels IT, améliorant les compétences de travail en équipe et s'adaptant à la culture organisationnelle d'une entreprise multinationale.",
          "Assistance aux tâches de configuration système, résolution de problèmes et fourniture de support.",
          "Participation à un projet clé qui a optimisé les fonctionnalités ERP.",
        ],
        ar: [
          "اكتسبت خبرة عملية مع أنظمة SAP ERP تحت إشراف PwC و Seidor، مما ساهم في تنفيذ حلول ERP عبر 5 أقسام رئيسية.",
          "تعاونت مع فريق من أكثر من 10 محترفين في تكنولوجيا المعلومات، مما عزز مهارات العمل الجماعي والتكيف مع الثقافة التنظيمية لشركة متعددة الجنسيات.",
          "ساعدت في مهام تكوين النظام، وحل المشكلات، وتقديم الدعم.",
          "شاركت في مشروع رئيسي حسّن وظائف نظام تخطيط موارد المؤسسات.",
        ],
      },
      type: "work",
    },
    {
      id: 3,
      title: {
        en: "Master's Degree in System Information and Decision Support",
        fr: "Master en Systèmes d'Information et Aide à la Décision",
        ar: "ماجستير في نظم المعلومات ودعم القرار",
      },
      company: "Mohammed Seddik Benyahia",
      location: {
        en: "Jijel",
        fr: "Jijel",
        ar: "جيجل",
      },
      period: {
        en: "September 2021 - September 2024",
        fr: "Septembre 2021 - Septembre 2024",
        ar: "سبتمبر 2021 - سبتمبر 2024",
      },
      description: {
        en: [
          "Relevant coursework: Decision Support Systems, Systems Design and Analysis, IT Project Management, Operations Research.",
        ],
        fr: [
          "Cours pertinents : Systèmes d'Aide à la Décision, Conception et Analyse de Systèmes, Gestion de Projets IT, Recherche Opérationnelle.",
        ],
        ar: [
          "المقررات ذات الصلة: أنظمة دعم القرار، تصميم وتحليل النظم، إدارة مشاريع تكنولوجيا المعلومات، بحوث العمليات.",
        ],
      },
      type: "education",
    },
    {
      id: 4,
      title: {
        en: "Bachelor's Degree in Information Systems",
        fr: "Licence en Systèmes d'Information",
        ar: "بكالوريوس في نظم المعلومات",
      },
      company: "Mohammed Seddik Benyahia",
      location: {
        en: "Jijel",
        fr: "Jijel",
        ar: "جيجل",
      },
      period: {
        en: "September 2018 - June 2021",
        fr: "Septembre 2018 - Juin 2021",
        ar: "سبتمبر 2018 - يونيو 2021",
      },
      description: {
        en: [
          "Relevant coursework: Database Management Systems, Software Engineering, Programming in Python and Java, Web Development, Systems Integration, Information Security.",
        ],
        fr: [
          "Cours pertinents : Systèmes de Gestion de Bases de Données, Génie Logiciel, Programmation en Python et Java, Développement Web, Intégration de Systèmes, Sécurité de l'Information.",
        ],
        ar: [
          "المقررات ذات الصلة: أنظمة إدارة قواعد البيانات، هندسة البرمجيات، البرمجة بلغتي Python و Java، تطوير الويب، تكامل الأنظمة، أمن المعلومات.",
        ],
      },
      type: "education",
    },
  ]

  const certifications = {
    en: [
      "Digital Advertising Fundamentals – Microsoft Advertising (August 2022)",
      "Bachelor degree in information systems – University Mohammed Seddik Benyahia (June 2021)",
      "Master's Degree in System Information and Decision Support – University Mohammed Seddik Benyahia (September 2024)",
    ],
    fr: [
      "Fondamentaux de la Publicité Numérique – Microsoft Advertising (Août 2022)",
      "Licence en systèmes d'information – Université Mohammed Seddik Benyahia (Juin 2021)",
      "Master en Systèmes d'Information et Aide à la Décision – Université Mohammed Seddik Benyahia (Septembre 2024)",
    ],
    ar: [
      "أساسيات الإعلان الرقمي - Microsoft Advertising (أغسطس 2022)",
      "بكالوريوس في نظم المعلومات - جامعة محمد الصديق بن يحيى (يونيو 2021)",
      "ماجستير في نظم المعلومات ودعم القرار - جامعة محمد الصديق بن يحيى (سبتمبر 2024)",
    ],
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("experience.title")}</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  {exp.type === "work" ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title[language as keyof typeof exp.title]}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company} | {exp.location[language as keyof typeof exp.location]}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="md:ml-auto w-fit">
                      {exp.period[language as keyof typeof exp.period]}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {exp.description[language as keyof typeof exp.description].map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">{t("experience.certifications")}</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-2">
                {certifications[language as keyof typeof certifications].map((cert, index) => (
                  <li key={index} className="text-muted-foreground">
                    {cert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
