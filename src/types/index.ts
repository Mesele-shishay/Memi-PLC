// Core component interfaces for the Biccas landing page

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  variant: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export interface Badge {
  label: string;
  value?: string;
  type: "rating" | "price" | "discount";
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Rating {
  company: string;
  score: string;
  rating: number;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface BenefitItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface Testimonial {
  name: string;
  quote: string;
  image?: string;
  role?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  highlight?: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

export interface BrandLogo {
  name: string;
  logo: string;
  alt: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface NewsletterForm {
  title: string;
  subtitle?: string;
  placeholder: string;
  buttonText: string;
}

// Main section interfaces
export interface HeaderProps {
  logo: string;
  navLinks: NavLink[];
  ctaButtons: CTAButton[];
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaButtons: CTAButton[];
  badges: Badge[];
  image: {
    src: string;
    alt: string;
  };
}

export interface TrustedSectionProps {
  title: string;
  brands: BrandLogo[];
}

export interface SupportSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  ratings: Rating[];
}

export interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureCard[];
}

export interface BenefitSectionProps {
  title: string;
  benefits: BenefitItem[];
  testimonial: Testimonial;
  image: {
    src: string;
    alt: string;
  };
}

export interface PricingSectionProps {
  title: string;
  subtitle?: string;
  billingOptions: string[];
  plans: PricingPlan[];
}

export interface TestimonialSectionProps {
  title: string;
  testimonial: Testimonial;
  avatars: string[];
}

export interface FooterProps {
  newsletter: NewsletterForm;
  sections: FooterSection[];
  legal: FooterLink[];
  copyright: string;
}
