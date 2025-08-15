"use client";
import React, { useEffect, useMemo, useState } from "react";
import BlogPost from "@/components/BlogPost";
import BlogPostDetailSkeleton from "@/components/BlogPostDetailSkeleton";
import RelatedPosts from "@/components/RelatedPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerData from "@/components/headerData";
import { api } from "@/lib/apiClient";
import { useParams, useRouter } from "next/navigation";

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams<{ slug?: string | string[] }>();

  const slug = useMemo(() => {
    const raw = params?.slug;
    if (Array.isArray(raw)) return raw[0] || "";
    return raw || "";
  }, [params]);

  const [post, setPost] = useState<any | null>(null);
  const [topPosts, setTopPosts] = useState<
    Array<{ slug: string; image: string; title: string; author: string }>
  >([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isCancelled = false;

    async function load() {
      if (!slug) return;
      setLoading(true);
      try {
        const fetchedPost = await api.internal<any>(`/api/blog/${slug}`);
        if (!fetchedPost) {
          if (!isCancelled) setPost(null);
          return;
        }

        const allPosts = await api.internal<any[]>("/api/blog");
        const computedTopPosts: Array<{
          slug: string;
          image: string;
          title: string;
          author: string;
        }> = (allPosts || [])
          .filter((p: any) => p.slug !== slug)
          .slice(0, 5)
          .map((p: any) => ({
            slug: p.slug,
            image: p.image || "",
            title: p.title || "",
            author: p.author || "",
          }));
        const computedTags = Array.from(
          new Set((allPosts || []).map((p: any) => p.category))
        ).filter(Boolean) as string[];

        if (!isCancelled) {
          setPost(fetchedPost);
          setTopPosts(computedTopPosts);
          setTags(computedTags);
        }
      } catch (err: any) {
        if (err?.status === 404) {
          if (!isCancelled) setPost(null);
          return;
        }
        console.error(err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    load();
    return () => {
      isCancelled = true;
    };
  }, [slug, router]);

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <div className="pt-24 lg:pt-32 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        {loading ? (
          <BlogPostDetailSkeleton />
        ) : post ? (
          <>
            <BlogPost slug={slug} post={post} topPosts={topPosts} tags={tags} />
            <RelatedPosts currentSlug={slug} />
          </>
        ) : (
          <div className="text-center text-gray-600">Post not found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
