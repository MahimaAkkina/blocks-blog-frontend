import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://nice-crystal-9995ec9ad3.strapiapp.com/api/posts?populate=*",
    { cache: "no-store" }
  );

  const result = await response.json();
  const blogs = result.data;
  console.log(blogs)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 bg-white"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h2 className="text-xl text-black font-bold mb-3">
                {blog.title}
              </h2>
            </Link>

            <p className="text-gray-500 mb-4">
              {blog.description}
            </p>
             <div className="text-sm text-black font-bold">
            {blog.author?.name} {/* Only displays name if author exists.*/}
          </div>
            <div className="text-sm text-gray-400">
              {new Date(blog.publishedOn).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}