import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: "IT Intern",
      company: "Algerie Qatari Steel",
      location: "Milia, Jijel",
      period: "July 2021 - October 2021",
      description: [
        "Gained hands-on experience with SAP ERP systems under the supervision of PwC and Seidor, contributing to the implementation of ERP solutions across 5 major departments.",
        "Collaborated with a team of 10+ IT professionals, enhancing teamwork skills and adapting to the organizational culture of a multinational company.",
        "Assisted with over 50 system configuration tasks, troubleshooting issues, and providing support, which improved system efficiency and reduced downtime by 20%.",
        "Participated in 3 key projects that optimized ERP functionalities, leading to a 15% increase in operational efficiency and a 10% reduction in processing time for business operations.",
      ],
      type: "work",
    },
    {
      id: 2,
      title: "Master's Degree in System Information and Decision Support",
      company: "Mohammed Seddik Benyahia",
      location: "Jijel",
      period: "September 2021 - Expected September 2024",
      description: [
        "Relevant coursework: Advanced Data Analytics, Decision Support Systems, Systems Design and Analysis, Data Mining, IT Project Management, Operations Research.",
      ],
      type: "education",
    },
    {
      id: 3,
      title: "Bachelor's Degree in Information Systems",
      company: "Mohammed Seddik Benyahia",
      location: "Jijel",
      period: "September 2018 - June 2021",
      description: [
        "Relevant coursework: Database Management Systems, Software Engineering, Programming in Python and Java, Web Development, Systems Integration, Information Security.",
      ],
      type: "education",
    },
  ]

  const certifications = [
    "Digital Advertising Fundamentals – Microsoft Advertising (August 2022)",
    "Big Data Basics – Udemy (October 2022)",
    "Data Analytics, Storage, Mining & Visual Big Data Technologies – Udemy (October 2022)",
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience & Education</h2>

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
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="md:ml-auto w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  {exp.description.map((item, index) => (
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
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-2">
                {certifications.map((cert, index) => (
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
