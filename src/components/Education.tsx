import { Timeline } from "@/components/ui/timeline";
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Started Bachelor's Degree</h3>
              <p className="text-primary font-semibold">Game Technology Program</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            Began studying at Electronic Engineering Polytechnic Institute of Surabaya (EEPIS), focusing on game development, interactive design, and software engineering.
          </p>
          <Card className="p-4 bg-card/50 border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Institution:</span> Electronic Engineering Polytechnic Institute of Surabaya
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="text-primary font-semibold">Location:</span> Surabaya, East Java, Indonesia
            </p>
          </Card>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Academic Excellence & Leadership</h3>
          <div className="mb-6">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-primary mb-4">
              <p className="text-primary-foreground font-bold text-lg">GPA: 3.61/4.00</p>
            </div>
          </div>
          <div className="space-y-3 mb-4">
            <div className="flex gap-2">
              <span className="text-primary mt-1">▹</span>
              <p className="text-muted-foreground text-sm md:text-base">
                Maintained strong academic performance with a GPA of 3.61
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-primary mt-1">▹</span>
              <p className="text-muted-foreground text-sm md:text-base">
                Actively participated in student organizations, gaining teamwork and leadership experience
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-primary mt-1">▹</span>
              <p className="text-muted-foreground text-sm md:text-base">
                Completed multiple self-development and organizational training programs
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">KMIPN 2025 Finalist</h3>
          <p className="text-muted-foreground text-sm md:text-base mb-6">
            Major milestone achieved with educational game project recognition at national level competition.
          </p>
          <Card className="p-4 bg-gradient-primary/10 border-primary/20">
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-primary mt-1">🏆</span>
                <p className="text-foreground text-sm md:text-base">
                  <span className="font-semibold">Educational nutrition game</span> selected as finalist in KMIPN 2025 competition
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-primary mt-1">🎮</span>
                <p className="text-foreground text-sm md:text-base">
                  Designed interactive learning game for elementary and junior high school students
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-primary mt-1">📚</span>
                <p className="text-foreground text-sm md:text-base">
                  Applied game design principles to create engaging educational experiences
                </p>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: "2027",
      content: (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Expected Graduation</h3>
          <p className="text-muted-foreground text-sm md:text-base mb-6">
            Anticipated completion of Bachelor of Game Technology program in July 2027.
          </p>
          <div className="grid gap-4">
            <Card className="p-4 bg-card/50 border-border hover:border-primary transition-colors">
              <p className="text-sm font-semibold text-foreground mb-2">Program Completion</p>
              <p className="text-xs text-muted-foreground">
                Comprehensive education in game development, design principles, and interactive technology
              </p>
            </Card>
            <Card className="p-4 bg-card/50 border-border hover:border-primary transition-colors">
              <p className="text-sm font-semibold text-foreground mb-2">Career Ready</p>
              <p className="text-xs text-muted-foreground">
                Prepared for professional opportunities in game design, development, and interactive media
              </p>
            </Card>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and achievements in Game Technology
          </p>
        </div>
      </div>
      <Timeline data={data} />
    </section>
  );
};

export default Education;
