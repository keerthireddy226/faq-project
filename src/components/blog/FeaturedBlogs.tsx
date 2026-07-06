import { ChevronRight } from "lucide-react";
export default function FeaturedPostSection() {
  const posts = [
    {
      category: "In-Demand Skills",
      title: "10 Must-have Skills for a Frontend Developer in 2026",
      date: "January 23, 2026",
    },
    {
      category: "Workforce Optimization",
      title:
        "5 Real-World Case Studies of Internal Talent Mobility Powered by Skill Mapping",
      date: "January 23, 2026",
    },
    {
      category: "In-Demand Skills",
      title: "10 Must-Have Skills for a System Administrator in 2026",
      date: "January 20, 2026",
    },
    {
      category: "Trending Technologies",
      title: "Essential Skills Every AI and ML Engineer Must Master in 2026",
      date: "January 16, 2026",
    },
    {
      category: "Job Roles & Responsibilities",
      title: "8 Key Roles and Responsibilities for Network Engineers",
      date: "January 8, 2026",
    },
    {
      category: "Learning and Development",
      title: "10 Must-Have Skills for a Scrum Master in 2026",
      date: "January 14, 2026",
    },
  ];

  return (
    <section className="bg-[#f6f9fd] py-20">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[42px] font-semibold leading-tight ">
            Featured <span className="font-serif italic">Post</span>
          </h2>

          <a
            href="/blog"
            className="hidden items-center gap-2 text-[18px] font-semibold text-black transition hover:text-lime md:flex"
          >
            More Blog Insights
            <ChevronRight size={22} strokeWidth={2.4} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="border-t border-black/50 pt-9">
              <p className="mb-3 text-[16px] text-black">{post.category}</p>
              <a
                href=""
                className="mb-10 text-[18px] font-medium leading-[1.35] text-black hover:text-blue-600 transition-colors duration-300"
              >
                <h3>{post.title}</h3>
              </a>
              <p className="text-[16px] mt-10 text-black">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
