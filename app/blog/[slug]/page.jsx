import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "../../../data/posts";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "مقال" };
  return {
    title: `${post.title} — مدونة مؤتمت`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="mx-auto px-6 md:px-32 py-12" dir="rtl" lang="ar">
        <p className="text-center text-[#475569]">المقال غير موجود</p>
        <div className="text-center mt-6">
          <Link href="/blog" className="text-[#009689]">العودة للمدونة</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto px-6 md:px-32 py-12" dir="rtl" lang="ar">
      <article className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-sm">
        {post.image && (
          <div className="w-full h-60 relative mb-6 rounded overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        )}
        <header className="mb-4 text-end">
          <h1 className="text-2xl font-semibold text-[#0F172B]">{post.title}</h1>
          <time dateTime={post.date} className="block text-sm text-[#94A3B8] mt-2">
            {new Date(post.date).toLocaleDateString("ar-SA")}
          </time>
        </header>

        <section className="prose prose-lg max-w-none text-[#314158] text-end" dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className="mt-8 pt-6 border-t border-[#E2E8F0] text-end">
          <Link href="/blog" className="text-[#009689]">العودة للمدونة</Link>
        </footer>
      </article>
    </main>
  );
}
