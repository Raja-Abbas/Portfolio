"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, Mail, MessageCircle, Phone, CheckCircle } from "lucide-react";
import { UpworkIcon } from "@/components/icons/upwork";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig, projectTypes, budgetRanges } from "@/lib/data";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

function buildWhatsAppMessage(data: ContactFormData) {
  return [
    `Hello ${siteConfig.name},`,
    "",
    "New Project Inquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Project Type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = buildWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.projectType &&
    formData.budget &&
    formData.message.trim();

  return (
    <section id="contact" className="section-padding bg-card/20">
      <div className="container-max">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Build Something Great
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Have a project in mind? Fill out the form and your inquiry will be
              sent directly to WhatsApp for a fast response.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Get in Touch
              </h3>
              <p className="text-sm text-muted-foreground">
                Submit the form to open WhatsApp with your message pre-filled.
                For urgent inquiries, you can also reach out directly below.
              </p>

              <div className="space-y-4">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Chat on WhatsApp</span>
                </Link>
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{siteConfig.phone}</span>
                </Link>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{siteConfig.email}</span>
                </Link>
                <Link
                  href={siteConfig.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <UpworkIcon className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Upwork Profile</span>
                </Link>
                <Link
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <span className="text-sm">LinkedIn Profile</span>
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-3">
            <div className="glass rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Opening WhatsApp
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Your message has been prepared in WhatsApp. Tap send in the
                    chat to complete your inquiry.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company (optional)"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Project Type</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => updateField("projectType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => updateField("budget", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={!isFormValid}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
