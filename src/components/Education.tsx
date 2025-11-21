import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2023",
    title: "Started Bachelor's Degree",
    description: "Began Game Technology program at EEPIS"
  },
  {
    year: "2024",
    title: "Academic Excellence",
    description: "Maintained strong GPA while leading organizations"
  },
  {
    year: "2025",
    title: "KMIPN Finalist",
    description: "Educational nutrition game selected as finalist"
  },
  {
    year: "2027",
    title: "Expected Graduation",
    description: "Bachelor of Game Technology completion"
  }
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = milestoneRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleMilestones(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Education</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Academic background and achievements
          </p>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10 group">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Bachelor of Game Technology</h3>
                      <p className="text-primary font-semibold text-lg">
                        Electronic Engineering Polytechnic Institute of Surabaya
                      </p>
                      <p className="text-muted-foreground">Surabaya, East Java, Indonesia</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <p className="font-semibold">Jul 2023 - Jul 2027 (Expected)</p>
                      <p className="text-primary text-xl font-bold">GPA: 3.61/4.00</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-foreground mb-8">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Achieved a GPA of 3.6, demonstrating strong academic performance throughout the program.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Actively participated in various student organizations, gaining experience in teamwork, leadership, and communication.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Completed multiple self-development and organizational training programs to enhance interpersonal and leadership skills.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Contributed to a game development project as Game Designer for educational purposes, designing interactive learning games for elementary and junior high school students.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Developed an educational nutrition game, which was selected as a finalist in the KMIPN 2025 competition.</span>
                    </li>
                  </ul>

                  {/* Academic Timeline */}
                  <div className="relative mt-8 pt-8 border-t border-border">
                    <h4 className="text-lg font-bold mb-6 text-primary">Academic Journey</h4>
                    <div className="relative">
                      {/* Horizontal timeline line */}
                      <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary hidden md:block" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2">
                        {milestones.map((milestone, index) => (
                          <div
                            key={index}
                            ref={el => milestoneRefs.current[index] = el}
                            className={`relative transition-all duration-700 ${
                              visibleMilestones.includes(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                          >
                            {/* Timeline dot */}
                            <div className="flex flex-col items-center mb-2">
                              <div className={`w-3 h-3 rounded-full bg-primary ring-4 ring-card transition-transform duration-500 ${
                                visibleMilestones.includes(index) ? 'scale-100' : 'scale-0'
                              }`}>
                                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                              </div>
                            </div>
                            
                            <div className="text-center p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                              <p className="text-primary font-bold text-lg mb-1">{milestone.year}</p>
                              <p className="font-semibold text-sm mb-1">{milestone.title}</p>
                              <p className="text-muted-foreground text-xs">{milestone.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
