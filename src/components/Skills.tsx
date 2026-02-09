import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 95 },
      { name: "Kotlin", level: 70 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    category: "Frameworks & Technologies",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Hibernate / JPA", level: 90 },
      { name: "Spring Cloud", level: 85 },
      { name: "Microservices", level: 92 },
      { name: "Vaadin", level: 70 },
      { name: "Spring MVC", level: 88 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 82 },
      { name: "Jenkins", level: 78 },
      { name: "GitLab CI/CD", level: 85 },
    ],
  },
];

const SkillBar = ({
  name,
  level,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  delay: number;
  isInView: boolean;
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-body text-foreground">{name}</span>
      <span className="text-xs font-mono text-primary">{level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background:
            "linear-gradient(90deg, hsl(217 91% 60%), hsl(200 90% 65%))",
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
            Skills & Expertise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <div className="w-20 h-1 gradient-line rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + groupIdx * 0.15 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-heading text-base font-semibold mb-6 text-primary">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + groupIdx * 0.15 + skillIdx * 0.08}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
