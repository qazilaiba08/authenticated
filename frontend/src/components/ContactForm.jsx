"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
}