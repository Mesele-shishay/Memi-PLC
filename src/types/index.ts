// Core component interfaces for the MEMi landing page

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
  image?: {
    src: string;
    alt: string;
    fallback: string;
  };
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

export interface Course {
  id: string;
  slug?: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  students: number;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  rating?: number;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface FeaturedCoursesSectionProps {
  title: string;
  subtitle?: string;
  courses: Course[];
  viewAllText?: string;
  viewAllHref?: string;
}

export interface FooterProps {
  newsletter: NewsletterForm;
  sections: FooterSection[];
  legal: FooterLink[];
  copyright: string;
}

// Contact/Inbox
export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType?: string;
  subject: string;
  message: string;
  createdAt: string; // ISO date string
  read: boolean;
}

// Added: Team and Get Involved section types to align with mock data
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: {
    src: string;
    alt: string;
    fallback: string;
  };
  expertise: string[];
  linkedin?: string;
  email?: string;
}

export interface TeamSectionProps {
  title: string;
  subtitle: string;
  team: TeamMember[];
}

export interface GetInvolvedSectionProps {
  title: string;
  subtitle: string;
  involvementOptions: {
    icon: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    image?: {
      src: string;
      alt: string;
      fallback: string;
    };
  }[];
}

// Aggregated home content type for editable dashboard
export interface HomeContent {
  hero: HeroSectionProps;
  support: SupportSectionProps;
  features: FeaturesSectionProps;
  benefits: BenefitSectionProps;
  pricing: PricingSectionProps;
  testimonial: TestimonialSectionProps;
  featuredCourses: FeaturedCoursesSectionProps;
  getInvolved: GetInvolvedSectionProps;
  team: TeamSectionProps;
  footer: FooterProps;
  trustedBrands?: TrustedSectionProps;
}
