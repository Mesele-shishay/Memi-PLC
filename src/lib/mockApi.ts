import {
  HeroSectionProps,
  SupportSectionProps,
  FeaturesSectionProps,
  BenefitSectionProps,
  PricingSectionProps,
  TestimonialSectionProps,
  FeaturedCoursesSectionProps,
  Course,
} from "@/types";

// Define missing interfaces locally
interface TeamMember {
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

interface TeamSectionProps {
  title: string;
  subtitle: string;
  team: TeamMember[];
}

interface GetInvolvedSectionProps {
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

interface BlogPost {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  authorImage: string;
}

// Hero Section Data
export const getHeroData = (): HeroSectionProps => ({
  title: "Transforming Tigray's Potential into Global Opportunities",
  subtitle:
    "MEMi Trading PLC is a fast-growing company based in Tigray, Ethiopia, creating a global platform for transforming local products, services, and youth potential into sustainable economic opportunities.",
  ctaButtons: [
    { label: "Explore Opportunities", variant: "primary" as const },
    { label: "Join Our Mission", variant: "secondary" as const },
  ],
  badges: [
    { label: "Tigray-Based", type: "rating" as const },
    {
      label: "Youth Focused",
      value: "50+ Jobs",
      type: "discount" as const,
    },
    { label: "Global Vision", value: "2033 Goal", type: "price" as const },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1669950200209-69d8292c032f?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "MEMi Trading PLC - Empowering Tigray's youth and local products globally",
  },
});

// Support Section Data
export const getSupportData = (): SupportSectionProps => ({
  title: "Empowering Tigray's Youth & Local Products Globally",
  subtitle:
    "Building sustainable economic opportunities through innovation, excellence, and inclusiveness while showcasing Tigray's potential on the global economic stage.",
  features: [
    {
      icon: "🎯",
      title: "Youth Empowerment",
      description:
        "Providing meaningful, tech-driven job opportunities for Tigray's youth, aiming to create over 300,000 jobs by 2033.",
    },
    {
      icon: "🌍",
      title: "Global Platform",
      description:
        "Transforming local Tigray products and services into international market opportunities with sustainable development focus.",
    },
    {
      icon: "🚀",
      title: "Innovation Hub",
      description:
        "Leading with excellence, innovation, and inclusiveness to build an internationally recognized brand from Tigray.",
    },
  ],
  ratings: [
    { company: "Tigray Business Review", score: "4.9 / 5", rating: 4.9 },
    { company: "Ethiopian Youth", score: "4.8 / 5", rating: 4.8 },
  ],
});

// Features Section Data
export const getFeaturesData = (): FeaturesSectionProps => ({
  title: "Our Core Services & Programs",
  subtitle:
    "Discover how MEMi Trading PLC is creating sustainable economic opportunities through local product transformation and youth empowerment programs.",
  features: [
    {
      title: "Technology Development",
      description:
        "Custom software solutions, mobile app development, and digital transformation services for businesses of all sizes.",
      image: {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
        alt: "Technology Development - Software and mobile app development",
        fallback: "💻",
      },
    },
    {
      title: "Talent Development",
      description:
        "Professional training programs and skill development initiatives to empower youth and build local capacity.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
        alt: "Talent Development - Professional training and skill development",
        fallback: "🎓",
      },
    },
    {
      title: "Real Estate & Construction",
      description:
        "Property development, construction management, and investment opportunities in Tigray's growing real estate market.",
      image: {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center",
        alt: "Real Estate & Construction - Property development and construction",
        fallback: "🏗️",
      },
    },
  ],
});

// Benefits Section Data
export const getBenefitsData = (): BenefitSectionProps => ({
  title: "Why Choose MEMi Trading PLC",
  benefits: [
    {
      id: "1",
      text: "Tigray-Based Company with Global Vision & Local Expertise",
      completed: true,
    },
    {
      id: "2",
      text: "Youth-Focused Programs Creating 300,000+ Job Opportunities",
      completed: true,
    },
    {
      id: "3",
      text: "Sustainable Development Through Private-Sector Growth",
      completed: true,
    },
    {
      id: "4",
      text: "Innovation & Excellence in Local Product Transformation",
      completed: true,
    },
    {
      id: "5",
      text: "International Brand Building from Tigray to Global Markets",
      completed: true,
    },
  ],
  testimonial: {
    name: "Kidane Gebrehiwot",
    quote:
      "MEMi Trading PLC is transforming how we think about local products and youth opportunities in Tigray. Their vision for 2033 inspires us all.",
    role: "Youth Program Coordinator, Tigray Region",
  },
  image: {
    src: "/benefit-image.jpg",
    alt: "MEMi Trading PLC team working on youth empowerment and local product development",
  },
});

// Pricing Section Data
export const getPricingData = (): PricingSectionProps => ({
  title: "Youth Development & Training Programs",
  subtitle:
    "Choose the program that fits your journey in Tigray's economic transformation. From basic skills to advanced entrepreneurship training.",
  billingOptions: ["Monthly Program", "Annual Program"],
  plans: [
    {
      name: "Starter",
      price: "ብር 1,500",
      period: "/month",
      features: [
        "Basic Skills Training",
        "Local Product Knowledge",
        "Market Access Introduction",
        "Community Network Access",
        "Mobile Learning Platform",
      ],
      ctaText: "Join Program",
    },
    {
      name: "Professional",
      price: "ብር 3,000",
      period: "/month",
      highlight: "Most Popular Choice",
      isPopular: true,
      features: [
        "All Starter Features",
        "Advanced Entrepreneurship Training",
        "Global Market Strategies",
        "Leadership Development",
        "1-on-1 Monthly Mentoring",
        "Product Development Tools",
      ],
      ctaText: "Go Professional",
    },
    {
      name: "Enterprise",
      price: "ብር 6,000",
      period: "/month",
      features: [
        "All Professional Features",
        "International Market Access",
        "Investment & Funding Support",
        "Weekly Group Coaching",
        "Direct Partner Access",
        "Business Plan Development",
        "Global Network Access",
      ],
      ctaText: "Scale Your Business",
    },
  ],
});

// Testimonial Section Data
export const getTestimonialData = (): TestimonialSectionProps => ({
  title: "What Tigray's Leaders Say About MEMi Trading PLC",
  testimonial: {
    name: "Martha Teklu",
    quote:
      "MEMi Trading PLC is not just a company; it's a movement that's empowering our youth and showcasing Tigray's potential to the world. Their commitment to creating 300,000 jobs by 2033 is exactly what our region needs.",
    role: "Regional Development Director, Tigray",
  },
  avatars: ["person1", "person2", "person3", "person4", "person5"],
});

// Featured Courses Data
export const getFeaturedCoursesData = (): FeaturedCoursesSectionProps => ({
  title: "Featured Training Courses",
  subtitle:
    "Empower yourself with our comprehensive training programs designed to transform Tigray's youth into global professionals.",
  courses: [
    {
      id: "1",
      title: "Digital Marketing & E-commerce",
      description:
        "Learn modern digital marketing strategies and e-commerce platforms to help local businesses reach global markets.",
      instructor: "Abebe Kebede",
      duration: "8 weeks",
      level: "Beginner" as const,
      category: "Marketing",
      rating: 4.8,
      students: 1247,
      price: "ብር 2,500",
      originalPrice: "ብር 3,500",
      image: "/course-digital-marketing.jpg",
      features: [
        "Live Projects",
        "Certificate",
        "Job Support",
        "Mobile Access",
      ],
      isPopular: true,
    },
    {
      id: "2",
      title: "Software Development Fundamentals",
      description:
        "Master the basics of programming and software development to create innovative solutions for local challenges.",
      instructor: "Kidist Haile",
      duration: "12 weeks",
      level: "Intermediate" as const,
      category: "Technology",
      rating: 4.9,
      students: 892,
      price: "ብር 4,200",
      image: "/course-software-dev.jpg",
      features: [
        "Hands-on Coding",
        "Portfolio Building",
        "Mentorship",
        "Career Guidance",
      ],
      isNew: true,
    },
    {
      id: "3",
      title: "Business Entrepreneurship",
      description:
        "Develop entrepreneurial skills and business acumen to start and scale successful ventures in Tigray.",
      instructor: "Martha Teklu",
      duration: "10 weeks",
      level: "Advanced" as const,
      category: "Business",
      rating: 4.7,
      students: 567,
      price: "ብር 3,800",
      originalPrice: "ብር 5,000",
      image: "/course-entrepreneurship.jpg",
      features: [
        "Business Plan",
        "Funding Access",
        "Network Building",
        "Market Research",
      ],
    },
  ],
  viewAllText: "View All Courses",
  viewAllHref: "/courses",
});

// Get Involved Section Data
export const getGetInvolvedData = (): GetInvolvedSectionProps => ({
  title: "Get Involved",
  subtitle:
    "Join us in our mission to rebuild and empower Tigray. There are multiple ways to be part of our journey.",
  involvementOptions: [
    {
      icon: "🎓",
      title: "Join Our Training Programs",
      description:
        "Enroll in our comprehensive training programs to develop skills in technology, business, and entrepreneurship.",
      ctaText: "Explore Programs",
      ctaHref: "/courses",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
        alt: "Training Programs - Students learning and developing skills",
        fallback: "🎓",
      },
    },
    {
      icon: "🤝",
      title: "Partner With Us",
      description:
        "Collaborate with MEMi Trading PLC to support local businesses and create sustainable economic opportunities.",
      ctaText: "Become a Partner",
      ctaHref: "/contact",
      image: {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=center",
        alt: "Partnership - Business collaboration and networking",
        fallback: "🤝",
      },
    },
    {
      icon: "💼",
      title: "Career Opportunities",
      description:
        "Join our team and contribute to Tigray's economic transformation through meaningful, tech-driven employment.",
      ctaText: "View Openings",
      ctaHref: "/careers",
      image: {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop&crop=center",
        alt: "Career Opportunities - Professional development and job opportunities",
        fallback: "💼",
      },
    },
  ],
});

// Team Section Data
export const getTeamData = (): TeamSectionProps => ({
  title: "Meet Our Team",
  subtitle:
    "Our diverse team of experts is passionate about creating innovative solutions and delivering exceptional experiences.",
  team: [
    {
      id: "1",
      name: "Abebe Kebede",
      role: "Chief Executive Officer",
      description:
        "Visionary leader with 15+ years of experience in business development and youth empowerment programs across East Africa.",
      image: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        alt: "Abebe Kebede - CEO of MEMi Trading PLC",
        fallback: "👨‍💼",
      },
      expertise: ["Strategic Planning", "Business Development", "Leadership"],
      linkedin: "https://linkedin.com/in/abebe-kebede",
      email: "abebe@memitrading.com",
    },
    {
      id: "2",
      name: "Kidist Haile",
      role: "Chief Technology Officer",
      description:
        "Tech innovator specializing in digital transformation and software development with expertise in scaling technology solutions.",
      image: {
        src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        alt: "Kidist Haile - CTO of MEMi Trading PLC",
        fallback: "👩‍💻",
      },
      expertise: [
        "Software Development",
        "Digital Transformation",
        "Innovation",
      ],
      linkedin: "https://linkedin.com/in/kidist-haile",
      email: "kidist@memitrading.com",
    },
    {
      id: "3",
      name: "Martha Teklu",
      role: "Head of Youth Programs",
      description:
        "Dedicated professional focused on creating sustainable employment opportunities and skill development for Tigray's youth.",
      image: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        alt: "Martha Teklu - Head of Youth Programs at MEMi Trading PLC",
        fallback: "👩‍🎓",
      },
      expertise: [
        "Youth Development",
        "Training Programs",
        "Community Outreach",
      ],
      linkedin: "https://linkedin.com/in/martha-teklu",
      email: "martha@memitrading.com",
    },
  ],
});

// Trusted Brands Data
export const getTrustedBrandsData = () => ({
  title: "Trusted By Leading Organizations",
  brands: [
    { name: "Ethiopian Ministry of Trade", logo: "🏛️", alt: "Ethiopian Ministry of Trade" },
    { name: "Tigray Chamber of Commerce", logo: "🏢", alt: "Tigray Chamber of Commerce" },
    { name: "Addis Ababa University", logo: "🎓", alt: "Addis Ababa University" },
    { name: "Ethiopian Investment Commission", logo: "💼", alt: "Ethiopian Investment Commission" },
    { name: "Tigray Development Association", logo: "🌱", alt: "Tigray Development Association" },
    { name: "African Development Bank", logo: "🏦", alt: "African Development Bank" },
  ],
});

// Footer Data
export const getFooterData = () => ({
  newsletter: {
    title: "Stay Updated with MEMi Trading PLC's Growth Journey",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },
  sections: [
    {
      title: "Programs",
      links: [
        { label: "Youth Empowerment", href: "#youth" },
        { label: "Product Transformation", href: "#products" },
        { label: "Market Access", href: "#market" },
        { label: "Training Programs", href: "#training" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Local Product Development", href: "#development" },
        { label: "Global Market Access", href: "#global" },
        { label: "Youth Training", href: "#training" },
        { label: "Partnership Programs", href: "#partnerships" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About MEMi Trading PLC", href: "#about" },
        { label: "Our Vision 2033", href: "#vision" },
        { label: "Tigray Focus", href: "#tigray" },
        { label: "News & Updates", href: "#news" },
      ],
    },
  ],
  legal: [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
  copyright: "© 2025 MEMi Trading PLC. All rights reserved. Tigray, Ethiopia",
});

// All Courses Data
export const getAllCourses = (): Course[] => [
  {
    id: "amharic-beginners",
    title: "Amharic for Beginners",
    description:
      "Master the basics of Amharic, Ethiopia's official language, with practical lessons and cultural insights.",
    instructor: "Mulugeta Bekele",
    duration: "8h 00m",
    level: "Beginner",
    category: "Language",
    rating: 4.8,
    students: 950,
    price: "ETB 350",
    originalPrice: "ETB 700",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop&crop=center",
    features: [
      "Native Instructors",
      "Cultural Context",
      "Certificate of Completion",
      "Lifetime Access",
    ],
    isPopular: true,
    isNew: true,
  },
  {
    id: "ethiopian-cuisine",
    title: "Ethiopian Cuisine: Cooking Injera & More",
    description:
      "Learn to cook traditional Ethiopian dishes like Injera, Doro Wat, and Shiro with step-by-step video guides.",
    instructor: "Sara Abebe",
    duration: "5h 15m",
    level: "Beginner",
    category: "Cooking",
    rating: 4.9,
    students: 1200,
    price: "ETB 400",
    originalPrice: "ETB 800",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
    features: [
      "Recipe Book Included",
      "Video Tutorials",
      "Community Support",
      "Certificate of Completion",
    ],
    isPopular: true,
    isNew: false,
  },
  {
    id: "addis-tech-bootcamp",
    title: "Addis Ababa Tech Bootcamp",
    description:
      "Kickstart your tech career with hands-on training in web development, mobile apps, and digital skills tailored for Ethiopia.",
    instructor: "Samuel Getachew",
    duration: "10h 30m",
    level: "Intermediate",
    category: "Technology",
    rating: 4.7,
    students: 800,
    price: "ETB 600",
    originalPrice: "ETB 1200",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
    features: [
      "Project-Based Learning",
      "Mentorship",
      "Job Readiness",
      "Certificate of Completion",
    ],
    isPopular: false,
    isNew: true,
  },
  {
    id: "ethiopian-history",
    title: "Ethiopian History & Heritage",
    description:
      "Explore Ethiopia's rich history, from ancient Axum to modern times, with engaging lectures and visuals.",
    instructor: "Dr. Almaz Tadesse",
    duration: "7h 45m",
    level: "Beginner",
    category: "History",
    rating: 4.6,
    students: 670,
    price: "ETB 300",
    originalPrice: "ETB 600",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&crop=center",
    features: [
      "Expert Lectures",
      "Downloadable Resources",
      "Interactive Quizzes",
      "Certificate of Completion",
    ],
    isPopular: false,
    isNew: false,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & E-commerce",
    description:
      "Learn modern digital marketing strategies and e-commerce platforms to help local businesses reach global markets.",
    instructor: "Abebe Kebede",
    duration: "8 weeks",
    level: "Beginner",
    category: "Marketing",
    rating: 4.8,
    students: 1247,
    price: "ብር 2,500",
    originalPrice: "ብር 3,500",
    image: "/course-digital-marketing.jpg",
    features: ["Live Projects", "Certificate", "Job Support", "Mobile Access"],
    isPopular: true,
  },
  {
    id: "software-development",
    title: "Software Development Fundamentals",
    description:
      "Master the basics of programming and software development to create innovative solutions for local challenges.",
    instructor: "Kidist Haile",
    duration: "12 weeks",
    level: "Intermediate",
    category: "Technology",
    rating: 4.9,
    students: 892,
    price: "ብር 4,200",
    image: "/course-software-dev.jpg",
    features: [
      "Hands-on Coding",
      "Portfolio Building",
      "Mentorship",
      "Career Guidance",
    ],
    isNew: true,
  },
  {
    id: "entrepreneurship",
    title: "Business Entrepreneurship",
    description:
      "Develop entrepreneurial skills and business acumen to start and scale successful ventures in Tigray.",
    instructor: "Martha Teklu",
    duration: "10 weeks",
    level: "Advanced",
    category: "Business",
    rating: 4.7,
    students: 567,
    price: "ብር 3,800",
    originalPrice: "ብር 5,000",
    image: "/course-entrepreneurship.jpg",
    features: [
      "Business Plan",
      "Funding Access",
      "Network Building",
      "Market Research",
    ],
  },
];

// Blog Posts Data
export const getAllBlogPosts = (): BlogPost[] => [
  {
    slug: "ethiopian-coffee-ceremony-guide",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title:
      "The Complete Guide to Ethiopian Coffee Ceremony: A Cultural Journey",
    excerpt:
      "Discover the ancient tradition of Ethiopian coffee ceremony, from the roasting process to the three rounds of serving. Learn about its cultural significance and how to host your own ceremony.",
    author: "Tigist Alemu",
    date: "December 15, 2023",
    category: "Culture",
    readTime: "8 min read",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
  },
  {
    slug: "addis-ababa-tech-startup-scene",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title:
      "Addis Ababa's Thriving Tech Startup Ecosystem: What You Need to Know",
    excerpt:
      "Explore the growing technology scene in Ethiopia's capital, from innovative startups to digital transformation initiatives that are shaping the country's future.",
    author: "Samuel Getachew",
    date: "December 12, 2023",
    category: "Technology",
    readTime: "10 min read",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
  },
  {
    slug: "ethiopian-cuisine-beginners-guide",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Ethiopian Cuisine for Beginners: Essential Dishes and Flavors",
    excerpt:
      "From Injera to Doro Wat, discover the essential dishes that make Ethiopian cuisine unique. Learn about spices, cooking techniques, and where to find authentic Ethiopian food.",
    author: "Sara Abebe",
    date: "December 10, 2023",
    category: "Food",
    readTime: "12 min read",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
  },
  {
    slug: "amharic-language-learning-tips",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Learning Amharic: Practical Tips for Beginners and Travelers",
    excerpt:
      "Master the basics of Ethiopia's official language with practical phrases, pronunciation guides, and cultural context that will help you connect with locals.",
    author: "Mulugeta Bekele",
    date: "December 8, 2023",
    category: "Language",
    readTime: "7 min read",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
  },
  {
    slug: "ethiopian-business-opportunities",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Business Opportunities in Ethiopia: A Guide for Entrepreneurs",
    excerpt:
      "Discover emerging business opportunities in Ethiopia's growing economy, from agriculture to technology, and learn about the regulatory environment for foreign investors.",
    author: "Hanna Mekonnen",
    date: "December 5, 2023",
    category: "Business",
    readTime: "9 min read",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
  },
];

// Get course by ID
export const getCourseById = (id: string): Course | undefined => {
  return getAllCourses().find((course) => course.id === id);
};

// Get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllBlogPosts().find((post) => post.slug === slug);
};

// Get related posts (excluding current post)
export const getRelatedPosts = (
  currentSlug: string,
  limit: number = 4
): BlogPost[] => {
  return getAllBlogPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
};

// Get top posts (excluding current post)
export const getTopPosts = (
  currentSlug: string,
  limit: number = 5
): BlogPost[] => {
  return getAllBlogPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
};

// Get unique categories for tags
export const getUniqueCategories = (): string[] => {
  return [...new Set(getAllBlogPosts().map((post) => post.category))];
};

// Get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return getAllBlogPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
};
