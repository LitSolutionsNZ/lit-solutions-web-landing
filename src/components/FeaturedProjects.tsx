import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "EasyPay",
    desc: "A NZ payments platform built on Stripe",
    bullets: ["Stripe Connect integration", "Multi-merchant POS", "Real-time payouts"],
    link: "https://easypay.co.nz",
    linkLabel: "Visit easypay.co.nz",
  },
  {
    name: "CallHub",
    desc: "AI receptionist and inbound inquiry system",
    bullets: ["Voice AI inbound handling", "Knowledge base Q&A", "SMS follow-up automation"],
    link: null,
    linkLabel: "Learn more",
  },
  {
    name: "SMS+",
    desc: "API-driven messaging and automation engine",
    bullets: ["Webhook-triggered SMS", "Campaign scheduling", "Delivery analytics"],
    link: null,
    linkLabel: "Learn more",
    internal: true,
  },
];

const FeaturedProjects = () => (
  <section id="projects" className="bg-secondary/30 py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">Portfolio</p>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Projects</h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col rounded-lg border-glow bg-card overflow-hidden"
          >
            {/* Screenshot placeholder */}
            <div className="relative h-40 bg-gradient-to-br from-secondary to-background grid-bg flex items-center justify-center">
              <span className="text-2xl font-bold text-foreground/10">{project.name}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                {project.internal && (
                  <span className="text-[10px] font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary px-2 py-0.5">
                    Internal
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
              <ul className="mb-6 space-y-1.5 flex-1">
                {project.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={project.link || "#contact"}
                target={project.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                {project.linkLabel}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
