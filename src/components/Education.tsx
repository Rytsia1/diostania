import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Education</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Academic background and achievements
          </p>
          
          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Game Technology</h3>
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
                
                <ul className="space-y-3 text-foreground">
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
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
