import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Gamepad2, Users2, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Game Development",
    icon: Gamepad2,
    skills: [
      { name: "Unity", level: 85 },
      { name: "Game Design", level: 90 },
      { name: "Level Design", level: 80 },
      { name: "Game Mechanics", level: 85 },
    ]
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "C#", level: 80 },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
      { name: "JavaScript", level: 65 },
    ]
  },
  {
    title: "Tools & Software",
    icon: Wrench,
    skills: [
      { name: "Git", level: 80 },
      { name: "Blender", level: 70 },
      { name: "Photoshop", level: 75 },
      { name: "Figma", level: 70 },
    ]
  },
  {
    title: "Soft Skills",
    icon: Users2,
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 90 },
    ]
  }
];

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = categoryRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCategories(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Skills & Expertise</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Technical proficiencies and competencies
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const isVisible = visibleCategories.includes(categoryIndex);
              
              return (
                <div
                  key={categoryIndex}
                  ref={el => categoryRefs.current[categoryIndex] = el}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 h-full group hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`transition-all duration-500`}
                          style={{ 
                            transitionDelay: isVisible ? `${(categoryIndex * 100) + (skillIndex * 100)}ms` : '0ms'
                          }}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="text-foreground font-medium">{skill.name}</span>
                            <span className="text-primary font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out relative"
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: isVisible ? `${(categoryIndex * 100) + (skillIndex * 100)}ms` : '0ms'
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
