import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
            Education
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <div className="w-20 h-1 gradient-line rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-6 md:p-8 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                Bachelor of Science | Computer Science
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  University of Ruhuna, Matara, Sri Lanka
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  Graduated 2010
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
