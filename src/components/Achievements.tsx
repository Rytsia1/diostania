import { Card } from "@/components/ui/card";
import { Trophy, Gamepad2, Award, Code } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "ITE SCALE Programme",
    subtitle: "Temasek Foundation Awardee",
    year: "2025",
    description: "Selected as a Temasek Foundation Awardee for the SCALE Programme"
  },
  {
    icon: Trophy,
    title: "Makan Siang Bergizi",
    subtitle: "KMIPN 2025 Finalist",
    year: "2025",
    description: "Educational nutrition game that became a finalist in KMIPN 2025 competition"
  },
  {
    icon: Gamepad2,
    title: "Whacky Whackers",
    subtitle: "Gameseed 2025 Top 60",
    year: "2025",
    description: "Game project that successfully ranked in the top 60 of Gameseed 2025"
  },
  {
    icon: Code,
    title: "Game Design Document",
    subtitle: "Educational Physics Game",
    year: "2024",
    description: "Developed comprehensive GDD for an educational physics-based game"
  }
];

const skills = [
  "Game Design",
  "Game Development",
  "Python",
  "Data Science",
  "Project Management",
  "Event Planning",
  "Team Leadership",
  "Financial Management"
];

const Achievements = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Achievements & Skills</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Notable accomplishments and expertise
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card hover:bg-secondary transition-all duration-300 border-border hover:border-primary group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="text-muted-foreground text-sm">{achievement.year}</span>
                      </div>
                      <p className="text-primary font-semibold mb-2">{achievement.subtitle}</p>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-card border border-border hover:border-primary hover:bg-secondary rounded-lg font-semibold transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
