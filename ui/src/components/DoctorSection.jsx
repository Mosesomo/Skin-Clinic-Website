import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import UserCard from '@/components/common/UserCard';

const DoctorSection = () => {
  const team = [
    {
        name: "Dr. Amina Diallo",
        role: "Chief Dermatologist",
        location: "Lagos, Nigeria",
        joinedYear: "2015",
        bio: "Board-certified dermatologist with extensive experience in treating skin conditions specific to African skin types. Specializes in hyperpigmentation and keloid management.",
        expertise: ["Medical Dermatology", "Skin of Color", "Keloid Treatment"],
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "amina@clinic.com",
            website: "#"
        }
    },
    {
        name: "Dr. Kwame Mensah",
        role: "Cosmetic Dermatologist",
        location: "Accra, Ghana",
        joinedYear: "2018",
        bio: "Expert in aesthetic procedures for melanin-rich skin. Focuses on non-invasive treatments that deliver natural-looking results without compromising skin health.",
        expertise: ["Laser Treatments", "Injectable", "Skin Rejuvenation"],
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "kwame@clinic.com",
            website: "#"
        }
    },
    {
        name: "Dr. Ngozi Eze",
        role: "Pediatric Dermatologist",
        location: "Nairobi, Kenya",
        joinedYear: "2020",
        bio: "Specializes in childhood skin conditions with a focus on eczema management and genetic skin disorders prevalent in African populations.",
        expertise: ["Pediatric Dermatology", "Eczema Care", "Genetic Disorders"],
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "ngozi@clinic.com",
            website: "#"
        }
    }
  ];

  return (
        <section id="team" className="relative py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                        Our Experts
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Meet Our Dermatologists
                    </h2>
                    <div className="mx-auto w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-6" />
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our board-certified specialists combine global expertise with deep understanding of African skin needs.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <UserCard member={member} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorSection;