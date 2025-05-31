import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Calendar, ChevronDown, ChevronUp, Globe, Linkedin, Mail, MapPin, Image, XIcon} from 'lucide-react';


const UserCard = ({member}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const bioMaxLength = 150; // Characters to show before truncating
    const shouldTruncate = member.bio.length > bioMaxLength;
    const truncatedBio = shouldTruncate ? member.bio.slice(0, bioMaxLength) + '...' : member.bio;

    const handleExpandClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <Card
            className="pt-0 rounded-none group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
        >
            <div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

            <CardContent className="p-0 flex-1 flex flex-col">
                {/* Image and social links */}
                <div className="relative">
                    <div className="aspect-square overflow-hidden">
                        <img
                            src={member.image !== "" ? member.image : Image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Hover overlay - for desktop */}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                    {/* Social Links*/}
                    <div
                        className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 transition-all duration-300">
                        {/* Background overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg -z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                        {member.social.linkedin && (
                            <Button
                                onClick={() => window.open(member.social.linkedin, '_blank')}
                                size="sm"
                                variant="secondary"
                                className="cursor-pointer h-8 w-8 p-0
                                         bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg
                                         hover:bg-blue-800 hover:backdrop-blur-none hover:border-white/40
                                         group-hover:bg-blue-600 group-hover:backdrop-blur-none
                                         transition-all duration-300
                                         active:scale-95"
                            >
                                <Linkedin className="h-4 w-4 text-white drop-shadow-sm transition-colors duration-300"/>
                            </Button>
                        )}
                        {member.social.twitter && (
                            <Button
                                onClick={() => window.open(member.social.twitter, '_blank')}
                                size="sm"
                                variant="secondary"
                                className="cursor-pointer h-8 w-8 p-0
                                         bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg
                                         hover:bg-black hover:backdrop-blur-none hover:border-white/60
                                         group-hover:bg-black group-hover:backdrop-blur-none
                                         transition-all duration-300
                                         active:scale-95"
                            >
                                <XIcon className="h-4 w-4 text-white drop-shadow-sm transition-colors duration-300"/>
                            </Button>
                        )}
                        {member.social.email && (
                            <Button
                                onClick={() => window.open(`mailto:${member.social.email}`, '_blank')}
                                size="sm"
                                variant="secondary"
                                className="cursor-pointer h-8 w-8 p-0
                                         bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg
                                         hover:bg-white/80 hover:backdrop-blur-none hover:border-green-700
                                         group-hover:bg-white/95 group-hover:backdrop-blur-none
                                         transition-all duration-300
                                         active:scale-95"
                            >
                                <Mail
                                    className="h-4 w-4 text-white drop-shadow-sm group-hover:text-gray-600 hover:text-gray-600 transition-colors duration-300"/>
                            </Button>
                        )}
                        {member.social.website && (
                            <Button
                                onClick={() => window.open(member.social.website, '_blank')}
                                size="sm"
                                variant="secondary"
                                className="cursor-pointer h-8 w-8 p-0
                                         bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg
                                         hover:bg-white/95 hover:backdrop-blur-none hover:border-white/40
                                         group-hover:bg-white/95 group-hover:backdrop-blur-none
                                         transition-all duration-300
                                         active:scale-95"
                            >
                                <Globe
                                    className="h-4 w-4 text-white drop-shadow-sm group-hover:text-green-600 hover:text-green-600 transition-colors duration-300"/>
                            </Button>
                        )}
                    </div>

                    {/* Mobile touch indicator - subtle pulse animation */}
                    <div className="absolute top-4 right-4 md:hidden">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                        </h3>
                        <p className="text-sm font-medium text-primary">{member.role}</p>
                    </div>

                    <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3"/>
                            {member.location}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3"/>
                            Joined {member.joinedYear}
                        </div>
                    </div>

                    {/* User Bio */}
                    <div className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        <p>{isExpanded ? member.bio : truncatedBio}</p>
                        {shouldTruncate && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="ml-1 h-auto p-1 text-indigo-600 hover:text-black hover:bg-primary/10 cursor-pointer z-10 relative"
                                onClick={handleExpandClick}
                                type="button"
                            >
                                {isExpanded ? (
                                    <span className="flex items-center text-xs sm:text-sm">
                                        Show Less <ChevronUp className="ml-1 h-3 w-3"/>
                                    </span>
                                ) : (
                                    <span className="flex items-center text-xs sm:text-sm">
                                        Show More <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4"/>
                                    </span>
                                )}
                            </Button>
                        )}
                    </div>

                    {/* User Skills */}
                    <div className="space-y-2 mt-auto">
                        <p className="text-xs font-medium text-foreground">Expertise:</p>
                        <div className="flex flex-wrap gap-1">
                            {member.expertise.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="text-xs px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserCard;