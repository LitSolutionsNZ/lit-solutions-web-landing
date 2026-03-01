import { motion } from "framer-motion";

const icons = ["Stripe", "AWS", "Postgres", "Cloudflare", "OpenAI"];

const TrustStrip = () => (
  <section className="border-y border-border/50 bg-secondary/30 py-8">
    <div className="container mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm tracking-wide text-muted-foreground"
      >
        Built across payments, voice AI, SMS automation, and custom SaaS
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-8"
      >
        {icons.map((name) => (
          <span
            key={name}
            className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustStrip;
