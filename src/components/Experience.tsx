import { Card } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Junior Game Designer",
    organization: "Game for Education and Cultural Heritage",
    location: "Surabaya, Indonesia",
    period: "Jun 2024 - Dec 2024",
    type: "work",
    description: "A research group developing games related to education and cultural heritage.",
    highlights: [
      "Developed a complete Game Design Document (GDD) for an educational physics-based game, detailing mechanics, levels, and learning objectives.",
      "Conducted gameplay testing and optimized performance, ensuring smooth mechanics and improved user engagement."
    ]
  },
  {
    title: "Volunteer",
    organization: "PENS International Cooperation Office",
    location: "Surabaya, Indonesia",
    period: "Oct 2024 - Present",
    type: "organization",
    description: "Supporting PENS to be world-class polytechnic with significant local, national, and international contributions.",
    highlights: [
      "Collaborating with faculty and international partners in planning and execution of international workshops and seminars."
    ]
  },
  {
    title: "Batch Treasurer",
    organization: "Badan Semi Otonom GT",
    location: "Surabaya, Indonesia",
    period: "Oct 2024 - Present",
    type: "organization",
    description: "Semi-autonomous body governing Game Technology students within PENS.",
    highlights: [
      "Planned and managed financial framework for BSO GT events, detailing projected income and expenses to maintain fiscal responsibility."
    ]
  },
  {
    title: "Head of Event Planner",
    organization: "EEPIS English Community (E2C)",
    location: "Surabaya, Indonesia",
    period: "Dec 2023 - Present",
    type: "organization",
    description: "Student club focusing on English communication and ESL understanding.",
    highlights: [
      "Managed complete cycle of student activity programs, from concept initiation and operational coordination to results analysis.",
      "Served as main person in charge for planning and executing various student activities."
    ]
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Experience</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            My professional and organizational journey
          </p>
          
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`relative transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 -translate-x-1/2 hidden md:block">
                    <div className={`w-4 h-4 rounded-full bg-primary ring-4 ring-background transition-transform duration-500 ${
                      visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                    }`}>
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    </div>
                  </div>
                  
                  <div className="md:ml-16">
                    <Card className="p-6 bg-card hover:bg-secondary transition-all duration-300 border-border hover:border-primary group cursor-pointer hover:shadow-lg hover:shadow-primary/10">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {exp.type === 'work' ? (
                              <Briefcase className="h-6 w-6 text-primary-foreground" />
                            ) : (
                              <Users className="h-6 w-6 text-primary-foreground" />
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-primary font-semibold">{exp.organization}</p>
                            </div>
                            <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                              <p className="font-semibold">{exp.period}</p>
                              <p>{exp.location}</p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex gap-2 text-foreground group-hover:text-foreground transition-colors">
                                <span className="text-primary mt-1">▹</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
