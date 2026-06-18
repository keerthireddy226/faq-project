import "../../../src/styles/blog-content.css";
import BlogFaqScript from "../../../src/components/blog/BlogFaqScript";

interface Blog {
  slug: string;
  // old format
  title?: string;
  category?: string;
  author?: { name: string; avatar: string; updatedOn: string };
  readTime?: string;
  whatsNew?: boolean;
  description?: string;
  // new format
  name?: string;
  authorName?: string;
  authorImage?: string;
  updatedDate?: string;
  whatsNewSection?: boolean;
  coverImage?: string;
  coverPhoto?: string;
  content?: string;
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
    cache: "no-store",
  });

  const blog: Blog = await res.json();

  if (!res.ok) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#2D3BC8]">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-white/70">Blog not found</p>
        </div>
      </main>
    );
  }

  // Normalise fields across old and new format
  const title = blog.title || blog.name || "";
  const authorName = blog.author?.name || blog.authorName || "";
  const authorAvatar = blog.author?.avatar || blog.authorImage || "";
  const updatedOn = blog.author?.updatedOn || blog.updatedDate || "";
  const showWhatsNew = blog.whatsNew || blog.whatsNewSection || false;

  return (
    <>
      {/* Hero */}
      <main className="relative min-h-[420px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#2D3BC8] to-[#5B4FD4]">

        {/* Concentric circles — left */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none">
          {[320, 260, 200, 140].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-white/10"
              style={{
                width: size,
                height: size,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Concentric circles — right */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none">
          {[320, 260, 200, 140].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-white/10"
              style={{
                width: size,
                height: size,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 py-20 max-w-3xl mx-auto">

          {/* Category badge */}
          <span className="inline-block bg-white/15 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-8">
            {title}
          </h1>

          {/* Author */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {authorAvatar && (
              <img
                src={authorAvatar}
                alt={authorName}
                className="w-11 h-11 rounded-full object-cover"
              />
            )}
            <div className="text-left">
              <p className="text-sm font-medium">by {authorName}</p>
              {updatedOn && (
                <p className="text-xs text-white/60">Updated On {updatedOn}</p>
              )}
            </div>
          </div>

          {/* Read time */}
          <div className="flex items-center justify-center gap-3 text-white/60 text-sm mb-5">
            <span className="flex-1 max-w-[80px] h-px bg-white/20"></span>
            {blog.readTime}
            <span className="flex-1 max-w-[80px] h-px bg-white/20"></span>
          </div>

          {/* What's New tag */}
          {showWhatsNew && (
            <div className="inline-flex items-center gap-2 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#c8e130]"></span>
              What&apos;s New
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}

        </div>
      </main>

      {/* Content body — only for blogs with content field */}
      {blog.content && (
        <section className="bg-white text-black">
          {/* {(blog.coverImage || blog.coverPhoto) && (
            <div className="max-w-4xl mx-auto px-6 pt-10">
              <img
                src={blog.coverImage || blog.coverPhoto}
                alt={title}
                className="w-full rounded-xl object-cover"
              />
            </div>
          )} */}
          <div
            className="blog-content max-w-4xl mx-auto px-6 py-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
          <BlogFaqScript />
        </section>
      )}
    </>
  );
}
