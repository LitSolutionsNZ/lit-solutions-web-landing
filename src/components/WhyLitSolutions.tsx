import { motion } from "framer-motion";
import { Shield, Layers, Wrench, User } from "lucide-react";
import VectorSwoosh from "./VectorSwoosh";

const points = [
  { icon: Wrench, text: "We ship production systems, not demos" },
  { icon: Shield, text: "Infrastructure-grade security and deployment" },
  { icon: Layers, text: "Payments + Voice + Automation under one roof" },
  { icon: User, text: "Built by an engineer who actually ships" },
];

const WhyLitSolutions = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Not another AI agency.
        </h2>
      </motion.div>

      <div className="mx-auto max-w-2xl space-y-0">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-4 py-5">
              <div className="flex-shrink-0 rounded-md bg-primary/10 p-2 text-primary">
                <point.icon size={18} />
              </div>
              <p className="text-base text-muted-foreground">{point.text}</p>
            </div>
            {i < points.length - 1 && (
              <div className="ml-5 w-48">
                <VectorSwoosh className="h-3 w-full opacity-20" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyLitSolutions;
