import "../../../src/styles/blog-content.css";
import "../../../src/styles/coroprate-companies.css";
import "../../../src/styles/faq-code.css";
import BlogFaqScript from "../../../src/components/blog/BlogFaqScript";
import TableOfContents from "@/src/styles/TableOfContents";

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
  const category =
    blog.category ||
    blog.newFormatBlogsSections ||
    blog["primary-keyword"] ||
    "";

  const description =
    blog.description ||
    blog["meta-description"] ||
    blog["short-description"] ||
    "";

  const authorName =
    blog.author?.name || blog.authorName || blog["author-name"] || "";

  const authorAvatar =
    blog.author?.avatar || blog.authorImage || blog["author-image"] || "";

  const updatedOn =
    blog.author?.updatedOn ||
    blog.updatedDate ||
    blog["post-published-date"] ||
    "";

  const readTime = blog.readTime || blog["read-time"] || "";

  const showWhatsNew = blog.whatsNew || blog.whatsNewSection || false;

  const content =
    blog.content ||
    blog.content2 ||
    blog["post-body"] ||
    blog["blog-content"] ||
    "";

  return (
    <>
      <main
        className="relative min-h-[620px] flex items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/672af632823a23f66a00034a_Rectangle%2028584.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 text-center px-6 py-24 max-w-5xl mx-auto">
          {category && (
            <span className="inline-block bg-white/15 text-white text-sm font-semibold px-5 py-2 rounded-full mb-7">
              {category}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-8">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl leading-8 text-white/85 max-w-4xl mx-auto mb-10">
              {description}
            </p>
          )}

          <div className="h-px bg-white/15 max-w-3xl mx-auto mb-8"></div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              {authorAvatar && (
                <img
                  src={authorAvatar}
                  alt={authorName || title}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                />
              )}

              <div className="text-left">
                {authorName && (
                  <p className="text-lg font-medium">by {authorName}</p>
                )}

                {updatedOn && (
                  <p className="text-sm text-white/70">
                    Updated On {updatedOn}
                  </p>
                )}
              </div>
            </div>

            {showWhatsNew && (
              <div className="inline-flex items-center gap-2 text-sm text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#c8e130]"></span>
                What&apos;s New
              </div>
            )}

            {readTime && (
              <div className="flex items-center justify-center gap-4 text-white/80 text-sm mt-2 w-full max-w-xl">
                <span className="flex-1 h-px bg-white/15"></span>
                {readTime}
                <span className="flex-1 h-px bg-white/15"></span>
              </div>
            )}
          </div>
        </div>
      </main>

      {content && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12">
            <div className="hidden lg:block">
              <TableOfContents />
            </div>

            <div
              className="blog-content max-w-4xl"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />

            <BlogFaqScript />
          </div>
        </section>
      )}
    </>
  );
}
