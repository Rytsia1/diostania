import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy } from "lucide-react";

import makanSiangImage from "@/assets/projects/makan-siang-bergizi.jpg";
import wackyWhackersImage from "@/assets/projects/wacky-whackers.jpg";
import pusmendikImage from "@/assets/projects/projek-pusmendik.jpg";
import dungeonImage from "@/assets/projects/dungeon-arcanacious.jpg";
import projectCogImage from "@/assets/projects/project-cog.jpg";

const projects = [
  {
    title: "Makan Siang Bergizi",
    description: "A simulation game where players take on the role of a Canteen Manager or Nutritionist, preparing free, nutritious lunches for students across Indonesian schools. Features local multiplayer functionality.",
    image: makanSiangImage,
    techStack: ["Unity", "C#", "Photon", "Multiplayer"],
    achievements: "🏆 Finalist KMIPN 2025",
    category: "Educational Game",
    status: "completed",
    link: "https://zenomaru.itch.io/makansiangbergizi"
  },
  {
    title: "Wacky Whackers",
    description: "A first-person game inspired by childhood fantasy battles with wooden sticks. Players explore a village to find the most powerful stick. Successfully ranked in the competition.",
    image: wackyWhackersImage,
    techStack: ["Unity", "C#", "First-Person"],
    achievements: "🏆 Top 60 Gameseed 2025",
    category: "Action Game",
    status: "completed",
    link: "https://zenomaru.itch.io/142-kanvas-kosong-student-whacky-whackers-the-ultimate-stick-battle"
  },
  {
    title: "Projek Pusmendik",
    description: "A gamified learning simulation for elementary and high school students developed in collaboration with the Game for Education and Cultural Heritage research team. Accessible online via web platform.",
    image: pusmendikImage,
    techStack: ["Unity", "C#", "WebGL", "Education"],
    category: "Educational Game",
    status: "completed"
  },
  {
    title: "Dungeon of Arcanacious",
    description: "A dungeon-crawling game featuring RPG systems and procedurally generated levels. Result of Game Project Workshop during 3rd & 4th semester.",
    image: dungeonImage,
    techStack: ["Godot", "GDScript", "Procedural Generation", "RPG"],
    category: "RPG Game",
    status: "completed",
    link: "https://sanzkuy.itch.io/arcana"
  },
  {
    title: "Project COG",
    description: "An ongoing game development project combining advanced mechanics and innovative gameplay design. Currently in active development with exciting features being implemented.",
    image: projectCogImage,
    techStack: ["Godot", "GDScript", "Game Design"],
    category: "Action Game",
    status: "ongoing"
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...new Set([...prev, index])]);
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
    <section id="projects" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects & Portfolio</h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Game development projects and creative works
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const isVisible = visibleProjects.includes(index);
              
              return (
                <div
                  key={index}
                  ref={el => projectRefs.current[index] = el}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 h-full group hover:shadow-xl hover:shadow-primary/20 cursor-pointer">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge 
                          className={`${
                            project.status === 'ongoing' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          {project.status === 'ongoing' ? '🔧 Ongoing' : '✓ Completed'}
                        </Badge>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      {project.achievements && (
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy className="h-4 w-4 text-primary" />
                          <span className="text-sm text-primary font-semibold">
                            {project.achievements}
                          </span>
                        </div>
                      )}
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.link ? (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-semibold"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Project
                          </a>
                        ) : (
                          <span className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                            <ExternalLink className="h-4 w-4" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <a 
              href="https://zenomaru.itch.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
            >
              <ExternalLink className="h-4 w-4" />
              Itch.io Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
