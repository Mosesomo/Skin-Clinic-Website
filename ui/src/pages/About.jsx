import { Award, Microscope, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const team = [
        {
          name: "Dr. Sarah Johnson",
          title: "Chief Dermatologist",
          specialty: "Medical Dermatology",
          image: "👩‍⚕️",
          experience: "15+ years"
        },
        {
          name: "Dr. Michael Chen",
          title: "Cosmetic Dermatologist",
          specialty: "Aesthetic Procedures",
          image: "👨‍⚕️",
          experience: "12+ years"
        },
        {
          name: "Dr. Emma Williams",
          title: "Pediatric Dermatologist",
          specialty: "Pediatric Skin Care",
          image: "👩‍⚕️",
          experience: "10+ years"
        }
      ];

    return (
      <>
        <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">About DermaCare</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading the way in dermatological excellence with cutting-edge treatments and personalized care
                </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-8 rounded-xl bg-background border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
                <p className="text-muted-foreground">Board-certified dermatologists with decades of combined experience</p>
                </div>
                
                <div className="text-center p-8 rounded-xl bg-background border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Microscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
                <p className="text-muted-foreground">State-of-the-art equipment for precise diagnosis and treatment</p>
                </div>
                
                <div className="text-center p-8 rounded-xl bg-background border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Care</h3>
                <p className="text-muted-foreground">Tailored treatment plans designed specifically for your skin needs</p>
                </div>
            </div>
            </div>
        </section>

        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our board-certified dermatologists are dedicated to providing exceptional care
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                    <div key={index} className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                        <div className="text-6xl mb-4">{member.image}</div>
                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                        <p className="text-primary font-medium mb-2">{member.title}</p>
                        <p className="text-muted-foreground mb-2">{member.specialty}</p>
                        <p className="text-sm text-muted-foreground">{member.experience}</p>
                        <Link to={`/contact`} className="mt-4 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                        View Profile
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </section>
     </>
    );
  };

export default AboutSection;