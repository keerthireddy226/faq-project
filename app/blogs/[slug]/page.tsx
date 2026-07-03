import "../../../src/styles/blog-content.css";
import "../../../src/styles/coroprate-companies.css";
import "../../../src/styles/faq-code.css";
import "../../../src/styles/inDemandSkills.css";
import TrainingCard from "@/src/components/blog/TrainingCard";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import BlogFaqScript from "../../../src/components/blog/BlogFaqScript";
import TableOfContents from "@/src/styles/TableOfContents";
import TrainingCatalogCTA from "@/src/components/blog/TrainingCatalogCTA";
import BlogTrainingCTA from "@/src/components/blog/BlogTrainingCTA";
import CoachingCTA from "@/src/components/blog/CoachingCTA";
import SkillMatrixCTA from "@/src/components/blog/SkillMatrixCTA";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://webflow-blog-api.vercel.app/api/blogs/${slug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#2D3BC8]">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-white/70">Blog not found</p>
          <p className="text-white/70">Slug: {slug}</p>
        </div>
      </main>
    );
  }

  const response = await res.json();
  const blog = response.fieldData || response.blog?.fieldData || response;

  const title = blog.title || blog.name || "";
  const desc = blog.description;
  const category =
    blog.category ||
    blog.newFormatBlogsSections ||
    blog["primary-keyword"] ||
    "";

  const authorName =
    blog.author?.name || blog.authorName || blog["author-name"] || "";

  const authorAvatar =
    blog.author?.avatar?.url ||
    blog.author?.avatar ||
    blog.authorImage?.url ||
    blog.authorImage ||
    blog["author-image"]?.url ||
    blog["author-image"] ||
    "";

  const updatedOn =
    blog.author?.updatedOn ||
    blog.updatedDate ||
    blog["post-published-date"] ||
    blog["updated-on"] ||
    "";

  const readTime = blog.readTime || blog["read-time"] || "";

  const badgeText =
    blog.badgeText || blog["badge-text"] || "What’s new in this article";

  const content =
    blog.content ||
    blog.content2 ||
    blog["post-body"] ||
    blog["blog-content"] ||
    blog["main-content"] ||
    "";

  return (
    <>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white py-28"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/672af632823a23f66a00034a_Rectangle%2028584.svg')",
        }}
      >
        <div className="relative z-10 mx-auto max-w-5xl text-center px-6">
          {category && (
            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">
              {category}
            </span>
          )}

          <h1 className="mx-auto mt-6 max-w-[900px] text-center text-white text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="max-w-[900px]">{desc}</p>

          <div className="mx-auto mt-12 max-w-2xl border-y border-white/10 py-6">
            <div className="flex items-center justify-center gap-4">
              {authorAvatar && (
                <Image
                  src={authorAvatar}
                  alt={authorName || "Author"}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              )}

              <div className="text-left">
                {authorName && (
                  <p className="text-base">
                    by <span className="font-medium">{authorName}</span>
                  </p>
                )}

                {updatedOn && (
                  <p className="mt-1 text-sm font-medium">
                    Updated On {updatedOn}
                  </p>
                )}
              </div>
            </div>

            {readTime && <p className="mt-6 text-sm">{readTime}</p>}
          </div>

          {badgeText && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="{container} flex h-5 w-5 items-center justify-center rounded-full bg-[#BFDB38]/30">
                <span className="h-2.5 w-2.5 rounded-full bg-[#BFDB38]" />
              </span>

              <span className="text-sm font-medium">{badgeText}</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          )}
        </div>
      </section>
      {content && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[200px_auto_270px] gap-4">
            <div className="hidden lg:block">
              <TableOfContents />
            </div>

            <div
              className="blog-content min-w-0"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />

            {/*
              Right sidebar: the grid stretches this cell to the full height of
              the left blog content. Each card sits in a slot that is 20% (1/5)
              of that height, so each card stays sticky (pinned at top 80px) for
              20% of the article scroll before handing off to the next card.
            */}
            <div className="hidden h-full lg:block">
              <div className="h-[20%]">
                <div className="sticky top-20">
                  <TrainingCard />
                </div>
              </div>
              <div className="h-[20%]">
                <div className="sticky top-20">
                  <TrainingCatalogCTA />
                </div>
              </div>
              <div className="h-[20%]">
                <div className="sticky top-20">
                  <CoachingCTA />
                </div>
              </div>
              <div className="h-[20%]">
                <div className="sticky top-20">
                  <SkillMatrixCTA />
                </div>
              </div>
              <div className="h-[20%]">
                <div className="sticky top-20">
                  <BlogTrainingCTA />
                </div>
              </div>
            </div>
          </div>

          <BlogFaqScript />
        </section>
      )}
    </>
  );
}
