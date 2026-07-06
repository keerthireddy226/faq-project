export default function RelatedPosts() {
  const posts = [
    "10 Must-have Skills for a Frontend Developer in 2026",
    "10 Must-Have Skills for a System Administrator in 2026",
    "12 Must-have Skills for a Site Reliability Engineer (SRE) in 2026",
    "10 Must-Have Skills for Talent Acquisition Manager",
  ];

  return (
    <section className="w-full  px-2 py-0">
      <h2 className="mb-10 text-2xl font-bold text-[#3b3b3b]">Related Posts</h2>

      <div className="space-y-7">
        {posts.map((post, index) => (
          <article key={index} className="border-l border-black pl-4">
            <p className="mb-2 text-base text-[#333]">In-Demand Skills</p>

            <a href="">
              <h3 className=" text-[16px] font-semibold leading-[1.35] text-[#202020] hover:text-blue-600 transition-colors duration-300">
                {post}
              </h3>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
