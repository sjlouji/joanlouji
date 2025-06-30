import Image from "next/image";
import { SectionWrapper } from "@/app/section-wrapper";
import { motion } from "framer-motion";

interface Contact {
  email: string;
  socials: {
    name: string;
    logo: string;
    url: string;
  }[];
}

interface ContactSectionProps {
  contact: Contact;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionWrapper id="contact" className="lg:py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 w-full">
          <div className="mt-10">
            <div className="text-4xl md:text-5xl text-gray-500 font-medium mb-2">
              Get in touch
            </div>
            <motion.div
              className="text-5xl md:text-3xl font-medium text-black relative w-fit cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onClick={() => (window.location.href = `mailto:${contact.email}`)}
              whileTap={{ scale: 0.95 }}
            >
              {contact.email}
              <div className="absolute left-0 right-0 -bottom-2 h-0.5 bg-black" />
            </motion.div>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center md:justify-end gap-6 mt-10">
          {contact.socials.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-black-200 hover:border-black-500 transition p-2"
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: "easeOut",
              }}
              whileTap={{ scale: 0.85, rotate: 10 }}
            >
              <Image
                src={link.logo}
                alt={link.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
