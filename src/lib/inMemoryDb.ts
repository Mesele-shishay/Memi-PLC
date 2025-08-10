import {
  Course,
  ContactMessage,
  HomeContent,
  HeroSectionProps,
  SupportSectionProps,
  FeaturesSectionProps,
  BenefitSectionProps,
  PricingSectionProps,
  TestimonialSectionProps,
  FeaturedCoursesSectionProps,
  GetInvolvedSectionProps,
  TeamSectionProps,
  FooterProps,
} from "@/types";
import {
  getAllCourses,
  getAllBlogPosts,
  getHeroData,
  getSupportData,
  getFeaturesData,
  getBenefitsData,
  getPricingData,
  getTestimonialData,
  getFeaturedCoursesData,
  getGetInvolvedData,
  getTeamData,
  getFooterData,
  getTrustedBrandsData,
} from "@/lib/mockApi";

export interface BlogPostDbItem {
  slug: string;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  authorImage: string;
}

type CreateCourseInput = Omit<Course, "id"> & { id?: string };
type UpdateCourseInput = Partial<Omit<Course, "id">> & { id: string };

type CreateBlogInput = Omit<BlogPostDbItem, "slug"> & { slug?: string };
type UpdateBlogInput = Partial<Omit<BlogPostDbItem, "slug">> & { slug: string };

function generateId(prefix: string = "id"): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

class InMemoryDb {
  private courses: Course[];
  private blogPosts: BlogPostDbItem[];
  private categories: string[];
  private messages: ContactMessage[];
  private homeContent: HomeContent;

  constructor() {
    // Initialize from mock data once
    this.courses = [...getAllCourses()];
    // Map mock posts that use `excerpt` to new `description` field
    this.blogPosts = getAllBlogPosts().map((b: any) => ({
      ...b,
      description: b.description ?? b.excerpt ?? "",
    }));
    this.categories = Array.from(
      new Set(this.blogPosts.map((b) => b.category).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b));
    this.messages = [];

    // Seed editable home content from mock API so editor matches homepage
    this.homeContent = {
      hero: getHeroData(),
      support: getSupportData(),
      features: getFeaturesData(),
      benefits: getBenefitsData(),
      pricing: getPricingData(),
      testimonial: getTestimonialData(),
      featuredCourses: getFeaturedCoursesData(),
      getInvolved: getGetInvolvedData(),
      team: getTeamData(),
      footer: getFooterData(),
      trustedBrands: getTrustedBrandsData(),
    } as HomeContent;
  }

  // Courses
  getCourses(): Course[] {
    return [...this.courses];
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find((c) => c.id === id);
  }

  createCourse(input: CreateCourseInput): Course {
    const id = input.id ?? generateId("course");
    const course: Course = { ...input, id } as Course;
    this.courses.unshift(course);
    return course;
  }

  updateCourse(input: UpdateCourseInput): Course | undefined {
    const index = this.courses.findIndex((c) => c.id === input.id);
    if (index === -1) return undefined;
    const updated = { ...this.courses[index], ...input } as Course;
    this.courses[index] = updated;
    return updated;
  }

  deleteCourse(id: string): boolean {
    const before = this.courses.length;
    this.courses = this.courses.filter((c) => c.id !== id);
    return this.courses.length < before;
  }

  // Blog
  getBlogPosts(): BlogPostDbItem[] {
    return [...this.blogPosts];
  }

  getBlogPostBySlug(slug: string): BlogPostDbItem | undefined {
    return this.blogPosts.find((b) => b.slug === slug);
  }

  createBlogPost(input: CreateBlogInput): BlogPostDbItem {
    const slug =
      input.slug && input.slug.trim().length > 0
        ? slugify(input.slug)
        : slugify(input.title || generateId("blog"));
    const blog: BlogPostDbItem = { ...input, slug } as BlogPostDbItem;
    this.blogPosts.unshift(blog);
    // Ensure category exists
    if (blog.category && !this.categories.includes(blog.category)) {
      this.categories.push(blog.category);
      this.categories.sort((a, b) => a.localeCompare(b));
    }
    return blog;
  }

  updateBlogPost(input: UpdateBlogInput): BlogPostDbItem | undefined {
    const index = this.blogPosts.findIndex((b) => b.slug === input.slug);
    if (index === -1) return undefined;
    const updated = { ...this.blogPosts[index], ...input } as BlogPostDbItem;
    this.blogPosts[index] = updated;
    if (updated.category && !this.categories.includes(updated.category)) {
      this.categories.push(updated.category);
      this.categories.sort((a, b) => a.localeCompare(b));
    }
    return updated;
  }

  deleteBlogPost(slug: string): boolean {
    const before = this.blogPosts.length;
    this.blogPosts = this.blogPosts.filter((b) => b.slug !== slug);
    return this.blogPosts.length < before;
  }

  // Categories
  getCategories(): string[] {
    return [...this.categories];
  }

  addCategory(name: string): string {
    const trimmed = name.trim();
    if (!trimmed) return name;
    if (!this.categories.includes(trimmed)) {
      this.categories.push(trimmed);
      this.categories.sort((a, b) => a.localeCompare(b));
    }
    return trimmed;
  }

  // Contact messages (inbox)
  listMessages(): ContactMessage[] {
    return [...this.messages];
  }

  getMessage(id: string): ContactMessage | undefined {
    return this.messages.find((m) => m.id === id);
  }

  createMessage(
    input: Omit<ContactMessage, "id" | "createdAt" | "read"> & {
      read?: boolean;
    }
  ): ContactMessage {
    const id = generateId("msg");
    const createdAt = new Date().toISOString();
    const message: ContactMessage = {
      id,
      createdAt,
      read: input.read ?? false,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      company: input.company,
      inquiryType: input.inquiryType,
      subject: input.subject,
      message: input.message,
    };
    this.messages.unshift(message);
    return message;
  }

  markMessageRead(
    id: string,
    read: boolean = true
  ): ContactMessage | undefined {
    const idx = this.messages.findIndex((m) => m.id === id);
    if (idx === -1) return undefined;
    this.messages[idx] = { ...this.messages[idx], read };
    return this.messages[idx];
  }

  deleteMessage(id: string): boolean {
    const before = this.messages.length;
    this.messages = this.messages.filter((m) => m.id !== id);
    return this.messages.length < before;
  }

  // Home content (editable)
  getHomeContent(): HomeContent {
    return JSON.parse(JSON.stringify(this.homeContent));
  }

  updateHomeContent(input: Partial<HomeContent>): HomeContent {
    // Shallow merge sections to preserve structure
    this.homeContent = {
      ...this.homeContent,
      ...input,
      hero: {
        ...this.homeContent.hero,
        ...(input.hero ?? {}),
      } as HeroSectionProps,
      support: {
        ...this.homeContent.support,
        ...(input.support ?? {}),
      } as SupportSectionProps,
      features: {
        ...this.homeContent.features,
        ...(input.features ?? {}),
      } as FeaturesSectionProps,
      benefits: {
        ...this.homeContent.benefits,
        ...(input.benefits ?? {}),
      } as BenefitSectionProps,
      pricing: {
        ...this.homeContent.pricing,
        ...(input.pricing ?? {}),
      } as PricingSectionProps,
      testimonial: {
        ...this.homeContent.testimonial,
        ...(input.testimonial ?? {}),
      } as TestimonialSectionProps,
      featuredCourses: {
        ...this.homeContent.featuredCourses,
        ...(input.featuredCourses ?? {}),
      } as FeaturedCoursesSectionProps,
      getInvolved: {
        ...this.homeContent.getInvolved,
        ...(input.getInvolved ?? {}),
      } as GetInvolvedSectionProps,
      team: {
        ...this.homeContent.team,
        ...(input.team ?? {}),
      } as TeamSectionProps,
      footer: {
        ...this.homeContent.footer,
        ...(input.footer ?? {}),
      } as FooterProps,
    };
    return this.getHomeContent();
  }
}

// Singleton instance
const db = new InMemoryDb();

export { db, slugify };
export type {
  CreateCourseInput,
  UpdateCourseInput,
  CreateBlogInput,
  UpdateBlogInput,
};
