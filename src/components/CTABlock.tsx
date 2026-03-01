import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import VectorSwoosh from "./VectorSwoosh";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CTABlock = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const apiUrl = (import.meta.env.VITE_API_URL ?? "https://litsolutions.nz/email").replace(/\/$/, "");
  const apiKey = import.meta.env.VITE_API_KEY ?? "";

  const onSubmit = async (data: ContactFormValues) => {
    if (!apiUrl || !apiKey) {
      toast({
        title: "Configuration error",
        description: "Contact form is not configured. Please set VITE_API_URL and VITE_API_KEY.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${apiUrl}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error((result as { error?: string }).error || "Failed to send message");
      }

      toast({
        title: "Message sent",
        description: "We'll get back to you soon.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Failed to send",
        description: err instanceof Error ? err.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl rounded-xl border-glow bg-card p-10 text-center sm:p-16 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to build an unfair advantage?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Tell us what you want to automate or build. We'll map the system and ship it.
            </p>

            <VectorSwoosh className="mx-auto mt-6 h-4 w-48 opacity-40" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-4 text-left">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What do you want to automate or build?"
                          className="min-h-[120px]"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send message"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                    asChild
                  >
                    <a href="mailto:hello@litsolutions.co.nz">Email us instead</a>
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABlock;
