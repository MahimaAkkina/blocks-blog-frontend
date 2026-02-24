import ContentBlock from "@/app/components/ContentBlock";
import HeroImage from "@/app/components/HeroImage";
import QuotationBlock from "@/app/components/QuotationBlock";
import GallerySlider from "@/app/components/GallerySlider";

export default async function BlogPage({ params }) {
    const {slug} =await params; 
    const response = await fetch(
        `https://nice-crystal-9995ec9ad3.strapiapp.com/api/posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[author]=true&populate[blocks][populate]=*`,
    { cache: "no-store" }
    );

    const result = await response.json();

    if(!result.data || !result.data.length) {
        return <div>Blog not found</div>;
    }

    const blog = result.data[0];

    // Fetch Global Single Type (Banner)
    const bannerRes = await fetch("https://nice-crystal-9995ec9ad3.strapiapp.com/api/blog-image?populate=bannerImage",
        { cache: "no-store" }
    );
    const bannerData = await bannerRes.json();

    const bannerUrl =
        bannerData?.data?.bannerImage?.url || null;
  
  return (
    <div>

        {/* Banner Section */}
        {bannerUrl && (
            <div
                className="relative h-[45vh] min-h-[300px] flex items-center justify-center text-black"
                style={{
                    backgroundImage: `url(${bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
            }}
        >
         {/* Overlay */}
                <div className="absolute inset-0"></div>

                <div className="relative text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {blog.title}
                </h1>

                <p className="text-lg sm:text-xl m-2 text-gray-800">
                    {blog.description}
                </p>

                <div className="text-sm text-black font-bold">
                    {blog.author?.name} {/* Only displays name if author exists.*/}
                </div>
            </div>
        </div>
    )}
    <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">

      {/* <h1 className="text-3xl sm:text-4xl text-center mb-6 font-bold">
        {blog.title}
      </h1>

      <p className="text-base sm:text-lg text-center mb-6 text-gray-500">
        {blog.description}
      </p>

      <hr className="mb-8" /> */}

      {/* Dynamic Zone Rendering */}
      {blog.blocks?.map((block, index) => {

        switch (block.__component) {

          case "blocks.hero-image":
            return <HeroImage key={index} data={block} />;

          case "blocks.content":
            return <ContentBlock key={index} data={block} />;

          case "blocks.quotation":
            return <QuotationBlock key={index} data={block} />;

          case "blocks.gallery-slider":
            return <GallerySlider key={index} data={block} />;

          default:
            return null;
        }

      })}

     </div>
    </div>
  );
}