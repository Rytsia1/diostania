import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Interested in collaborating or learning more? Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:dioadinata520@gmail.com"
                    className="text-primary hover:underline"
                  >
                    dioadinata520@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/dioadinata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/dioadinata
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a 
                    href="tel:+6281334673146"
                    className="text-primary hover:underline"
                  >
                    +62 813-3467-3146
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Surabaya, East Java, Indonesia
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => window.open('mailto:dioadinata520@gmail.com', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send an Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
