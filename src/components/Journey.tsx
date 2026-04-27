import { Timeline } from "@/components/ui/timeline";
import { Briefcase, Users, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Journey = () => {
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
      title: "Dec 2023 - Present",
      content: (
        <div>
          <div className="flex gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                Head of Event Planner
              </h3>
              <p className="text-primary font-semibold mb-1">EEPIS English Community (E2C)</p>
              <p className="text-muted-foreground text-sm mb-3">Surabaya, Indonesia</p>
            </div>
          </div>
          <p className="text-foreground/80 mb-4 text-sm md:text-base">
            Student club focusing on English communication and ESL understanding.
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2 text-foreground text-sm md:text-base">
              <span className="text-primary mt-1">▹</span>
              <span>Managed complete cycle of student activity programs, from concept initiation and operational coordination to results analysis.</span>
            </li>
            <li className="flex gap-2 text-foreground text-sm md:text-base">
              <span className="text-primary mt-1">▹</span>
              <span>Served as main person in charge for planning and executing various student activities.</span>
            </li>
          </ul>
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
      title: "Jun 2024 - Dec 2024",
      content: (
        <div>
          <div className="flex gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                Junior Game Designer
              </h3>
              <p className="text-primary font-semibold mb-1">Game for Education and Cultural Heritage</p>
              <p className="text-muted-foreground text-sm mb-3">Surabaya, Indonesia</p>
            </div>
          </div>
          <p className="text-foreground/80 mb-4 text-sm md:text-base">
            A research group developing games related to education and cultural heritage.
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2 text-foreground text-sm md:text-base">
              <span className="text-primary mt-1">▹</span>
              <span>Developed a complete Game Design Document (GDD) for an educational physics-based game, detailing mechanics, levels, and learning objectives.</span>
            </li>
            <li className="flex gap-2 text-foreground text-sm md:text-base">
              <span className="text-primary mt-1">▹</span>
              <span>Conducted gameplay testing and optimized performance, ensuring smooth mechanics and improved user engagement.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Oct 2024 - Present",
      content: (
        <div className="space-y-8">
          <div>
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  Volunteer
                </h3>
                <p className="text-primary font-semibold mb-1">PENS International Cooperation Office</p>
                <p className="text-muted-foreground text-sm mb-3">Surabaya, Indonesia</p>
              </div>
            </div>
            <p className="text-foreground/80 mb-4 text-sm md:text-base">
              Supporting PENS to be world-class polytechnic with significant local, national, and international contributions.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2 text-foreground text-sm md:text-base">
                <span className="text-primary mt-1">▹</span>
                <span>Collaborating with faculty and international partners in planning and execution of international workshops and seminars.</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  Batch Treasurer
                </h3>
                <p className="text-primary font-semibold mb-1">Badan Semi Otonom GT</p>
                <p className="text-muted-foreground text-sm mb-3">Surabaya, Indonesia</p>
              </div>
            </div>
            <p className="text-foreground/80 mb-4 text-sm md:text-base">
              Semi-autonomous body governing Game Technology students within PENS.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2 text-foreground text-sm md:text-base">
                <span className="text-primary mt-1">▹</span>
                <span>Planned and managed financial framework for BSO GT events, detailing projected income and expenses to maintain fiscal responsibility.</span>
              </li>
            </ul>
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
      title: "Mar 2026 - Jul 2026",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Student Exchange Program</h3>
              <p className="text-primary font-semibold">Software Engineering — Spring Semester</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            Currently attending Shandong University of Science and Technology as an exchange student from March until July 2026, expanding international experience and deepening expertise in Software Engineering.
          </p>
          <Card className="p-4 bg-card/50 border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Institution:</span> Shandong University of Science and Technology
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="text-primary font-semibold">Major:</span> Software Engineering
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="text-primary font-semibold">Location:</span> Shandong, China
            </p>
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
    <section id="journey" className="bg-background">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          My Journey
        </h2>
        <p className="text-muted-foreground mb-8 text-base md:text-lg max-w-2xl">
          A unified timeline of my education and professional experience
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
};

export default Journey;
