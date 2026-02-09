import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import kubernetesLogo from "@/assets/kubernetes-logo.svg";
import awsLogo from "@/assets/aws-logo.svg";
import javaLogo from "@/assets/java-logo.svg";

const certBadges = [
  { logo: kubernetesLogo, label: "CKAD", name: "Kubernetes" },
  { logo: awsLogo, label: "AWS SA", name: "AWS" },
  { logo: javaLogo, label: "SCJP", name: "Java" },
];

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "3+", label: "Industry Domains" },
  { value: "3", label: "Certifications" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-body text-primary">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Jeevan{" "}
              <span className="text-gradient">Pussella</span>
            </h1>

            <p className="font-heading text-lg md:text-xl text-primary/90 font-medium mb-6">
              Senior Java Backend Developer & Cloud Architect
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl font-body">
              14+ years of expertise crafting scalable, secure, and
              high-performance backend systems with Java, Spring Boot, and
              cloud-native microservices architectures.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  <ArrowDown size={18} />
                  View Portfolio
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Send size={18} />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glow-blue-strong border-2 border-primary/20 animate-float">
                <img
                  src={profilePhoto}
                  alt="Jeevan Pussella"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Certification Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3"
              >
                {certBadges.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="group relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="w-7 h-7 md:w-8 md:h-8 object-contain"
                    />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {cert.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-primary/10 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
