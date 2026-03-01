import { motion } from "framer-motion";
import { CreditCard, Phone, Zap, LayoutDashboard } from "lucide-react";

const cards = [
  {
    icon: CreditCard,
    title: "Payments Platforms",
    desc: "Stripe-powered POS and SaaS billing systems",
  },
  {
    icon: Phone,
    title: "Voice AI Reception",
    desc: "Inbound calls, KB answers, escalations, SMS follow-ups",
  },
  {
    icon: Zap,
    title: "Automation & Messaging",
    desc: "Workflows, webhooks, SMS engines, notifications",
  },
  {
    icon: LayoutDashboard,
    title: "Custom SaaS Builds",
    desc: "Multi-tenant dashboards, secure deployments, integrations",
  },
];

const WhatWeBuild = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-3">Services</p>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What We Build</h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-lg border-glow bg-card p-6 transition-all hover:border-primary/30"
          >
            <div className="mb-4 inline-flex rounded-md bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary/20">
              <card.icon size={20} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{card.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeBuild;
