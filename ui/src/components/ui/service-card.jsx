import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedFeatures = isExpanded ? service.features : service.features.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {/* Service Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {service.description}
            </p>
          </div>
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <service.Icon className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Features List */}
        {service.features && (
          <div className="space-y-4">
            <ul className="space-y-2">
              <AnimatePresence initial={false}>
                {displayedFeatures.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-muted-foreground flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            {service.features.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-colors group/btn"
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4 ml-1 transition-transform group-hover/btn:-translate-y-0.5" />
                  </>
                ) : (
                  <>
                    Show More
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-y-0.5" />
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Action Button */}
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-primary font-medium text-sm group/link mt-4"
        >
          <span className="relative">
            Learn More
            <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform" />
          </span>
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/20 transition-colors" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl group-hover:bg-accent/20 transition-colors" />
    </motion.div>
  );
};

export default ServiceCard; 