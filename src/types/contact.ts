export interface Contact {
  heading: string;
  subheading: string;
  email: string;
  addressLabel: string;
  address: string[];
  socialsLabel: string;
  location: string;
  availability: string;
  preferredContact: string;
  newsletter: {
    title: string;
    description: string;
    url: string;
    buttonText: string;
  };
  socials: {
    name: string;
    logo: string;
    url: string;
  }[];
}

export interface ContactSectionProps {
  contact: Contact;
}
