import blogsFromFile from "../../../../src/data/blogs.json";
const blogs = [
  {
    slug: "employee-onboarding-roi",
    category: "Workforce Optimization",
    title: "The Ultimate Guide to Employee Onboarding ROI Calculators for 2026",
    author: {
      name: "Harrison Mitchel",
      avatar: "https://i.pravatar.cc/150?img=12",
      updatedOn: "Jun 18, 2026",
    },
    readTime: "9 mins read",
    whatsNew: true,
    description:
      "Employee onboarding ROI calculators help organisations quantify the financial impact of their onboarding programmes. This guide covers how to measure, track, and optimise onboarding investments for maximum business impact.",
  },
  {
    slug: "learning-strategy-2026",
    category: "Learning & Development",
    title: "How to Build a Future-Ready Learning Strategy for Enterprise Teams",
    author: {
      name: "Sarah Collins",
      avatar: "https://i.pravatar.cc/150?img=47",
      updatedOn: "Jun 15, 2026",
    },
    readTime: "6 mins read",
    whatsNew: false,
    description:
      "A future-ready learning strategy aligns workforce capability development with business priorities. Discover the frameworks, tools, and approaches leading enterprises use to stay ahead.",
  },
  ...blogsFromFile,
];

export async function GET(_request, { params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return Response.json({ error: "404", receivedSlug: slug }, { status: 404 });
  }

  return Response.json(blog);
}
