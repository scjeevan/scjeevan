import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Code2 } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "Certified Kubernetes Application Developer",
    abbr: "CKAD",
    issuer: "The Linux Foundation",
    date: "02/2026",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Award,
    title: "AWS Certified Solutions Architect",
    abbr: "Associate",
    issuer: "Amazon Web Services",
    date: "12/2024",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    icon: Code2,
    title: "Sun Certified Java Programmer",
    abbr: "SCJP",
    issuer: "Sun Microsystems",
    date: "2008",
    color: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/30",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
            Certifications
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Professional <span className="text-gradient">Credentials</span>
          </h2>
          <div className="w-20 h-1 gradient-line rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group ${cert.borderColor} hover:border-opacity-60`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <cert.icon size={26} className="text-foreground" />
              </div>

              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-mono mb-3">
                {cert.abbr}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-body">
                  {cert.issuer}
                </span>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
