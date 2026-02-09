import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Technical Lead",
    company: "HCL Technologies",
    period: "02/2022 – Present",
    points: [
      "Built and scaled RESTful microservices using Java, Spring Boot, and Spring Cloud.",
      "Delivered backend and full-stack enhancements for sustainability and energy platforms.",
      "Implemented centralized monitoring and alerting, reducing incident detection time by 60%.",
      "Streamlined CI/CD pipelines with GitLab CI/CD and Kubernetes on Azure.",
      "Contributed to enterprise AEM solutions for a European energy company.",
    ],
  },
  {
    title: "Associate Tech Lead",
    company: "Axiata Digital Labs",
    period: "07/2021 – 02/2022",
    points: [
      "Led development of Genie, a major fintech super app in Sri Lanka.",
      "Managed a team of six engineers.",
      "Designed cloud-native systems using Spring Boot, Kubernetes, Kafka, and PostgreSQL.",
      "Implemented AWS infrastructure for 24/7 high-availability transaction processing.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
            Work Experience
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 gradient-line rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px gradient-line-vertical hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-2 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 items-center justify-center">
                  <Briefcase size={18} className="text-primary" />
                </div>

                <div className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-body text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground font-body leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
