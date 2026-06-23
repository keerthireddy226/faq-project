import blogs from "@/data/blogs.json";

export async function GET(request, { params }) {
  const { slug } = params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return Response.json(
      { error: "Blog not found", receivedSlug: slug },
      { status: 404 },
    );
  }

  return Response.json(blog);
}
