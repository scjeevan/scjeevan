import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Cloud, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing robust, scalable backend systems with Java, Spring Boot, and microservices patterns.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Building and deploying cloud-native applications on AWS and Azure with Kubernetes and CI/CD.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Leading engineering teams, mentoring developers, and driving architectural decisions.",
  },
  {
    icon: Zap,
    title: "Performance & Security",
    description: "Optimizing system performance, implementing security best practices, and ensuring high availability.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
            About Me
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Building the <span className="text-gradient">Backbone</span> of
            Digital Systems
          </h2>
          <div className="w-20 h-1 gradient-line rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed font-body text-base md:text-lg">
              I'm a Senior Java Backend Developer and Cloud Architect with over
              14 years of hands-on experience building enterprise-grade
              applications across fintech, telecom, and energy domains.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-base md:text-lg">
              My passion lies in modernizing legacy systems, building
              high-availability platforms, and enabling CI/CD-driven delivery
              pipelines. I thrive in environments where architecture meets
              pragmatism — turning complex business requirements into clean,
              maintainable code.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-base md:text-lg">
              Beyond code, I focus on leadership, collaboration, and
              architectural decision-making — empowering teams to ship reliable
              software at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
