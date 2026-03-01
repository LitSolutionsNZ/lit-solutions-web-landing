import { motion } from "framer-motion";
import VectorSwoosh from "./VectorSwoosh";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Grid background */}
    <div className="absolute inset-0 grid-bg opacity-30" />

    {/* Radial glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="container relative z-10 mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          We build AI systems that
          <br />
          <span className="text-gradient-primary">generate revenue.</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
      >
        Production-grade voice, payments, and automation systems for real businesses.
        Built by engineers, deployed securely.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="#contact"
          className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary hover:brightness-110"
        >
          Book a Strategy Call
        </a>
        <a
          href="#projects"
          className="rounded-md border border-border px-8 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
        >
          View Projects
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mx-auto mt-16 max-w-md"
      >
        <VectorSwoosh className="w-full h-auto opacity-60" />
      </motion.div>

      {/* System diagram nodes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-20 left-0 right-0 flex justify-center gap-20"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-12 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
