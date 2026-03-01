import { motion } from "framer-motion";

const steps = [
  { num: "01", label: "Strategy Call" },
  { num: "02", label: "Architecture Plan" },
  { num: "03", label: "Build" },
  { num: "04", label: "Deploy" },
  { num: "05", label: "Optimize" },
];

const Process = () => (
  <section id="process" className="bg-secondary/30 py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">How We Work</p>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Process</h2>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        {/* Connecting line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-primary shrink-0">
                {step.num}
              </div>
              <div className="rounded-lg border-glow bg-card px-6 py-4 flex-1">
                <p className="font-medium text-foreground">{step.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
