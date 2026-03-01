import { motion } from "framer-motion";
import VectorSwoosh from "./VectorSwoosh";

const CTABlock = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-2xl rounded-xl border-glow bg-card p-10 text-center sm:p-16 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to build an unfair advantage?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Tell us what you want to automate or build. We'll map the system and ship it.
          </p>

          <VectorSwoosh className="mx-auto mt-6 h-4 w-48 opacity-40" />

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@litsolutions.co.nz"
              className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary hover:brightness-110"
            >
              Book a Strategy Call
            </a>
            <a
              href="mailto:hello@litsolutions.co.nz"
              className="rounded-md border border-border px-8 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              Email us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABlock;
