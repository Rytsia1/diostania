import { Timeline } from "@/components/ui/timeline";
import { Briefcase, Users } from "lucide-react";

const Experience = () => {
  const data = [
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
      ),
    },
    {
      title: "Oct 2024 - Present",
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
      ),
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Experience
        </h2>
        <p className="text-muted-foreground mb-8 text-base md:text-lg max-w-2xl">
          My professional and organizational journey
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
