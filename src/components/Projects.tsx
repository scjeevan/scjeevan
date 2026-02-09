import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Server, Shield, Zap } from "lucide-react";

const techTags = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Kafka",
  "AWS",
];

const features = [
  { icon: Server, label: "Scalable Architecture", desc: "Handles millions of transactions with horizontal scaling" },
  { icon: Shield, label: "Security First", desc: "End-to-end encryption and secure transaction processing" },
  { icon: Zap, label: "Real-time Processing", desc: "Low-latency event-driven architecture with Kafka" },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
            Projects
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Notable <span className="text-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 gradient-line rounded-full mt-4" />
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 md:p-10 hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <ExternalLink size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Genie – Financial Super App
              </h3>
              <p className="text-sm text-primary font-body">
                Backend Architect / Tech Lead
              </p>
            </div>
          </div>

          <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-3xl">
            A comprehensive financial management platform offering payments,
            lending, savings, remittance, insurance, and wealth management. Built
            for scale, security, and real-time transaction processing to serve
            millions of users across Sri Lanka.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-secondary/50 rounded-xl p-4"
              >
                <feature.icon size={20} className="text-primary mb-2" />
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">
                  {feature.label}
                </h4>
                <p className="text-xs text-muted-foreground font-body">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
