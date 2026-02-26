// Import reusable components used for dynamic rendering
import ContentBlock from "@/app/components/ContentBlock";
import HeroImage from "@/app/components/HeroImage";
import QuotationBlock from "@/app/components/QuotationBlock";
import GallerySlider from "@/app/components/GallerySlider";
import CardsBlock from "@/app/components/CardsBlock";

// Async function to render blog page based on dynamic slug
export default async function BlogPage({ params }) {

  const { slug } = await params; // Extract slug from dynamic route params

  // Fetch blog post from Strapi using slug filter
  const response = await fetch(
    `https://nice-crystal-9995ec9ad3.strapiapp.com/api/posts?
filters[slug][$eq]=${encodeURIComponent(slug)}
&populate[author]=true
&populate[blocks][on][blocks.hero-image][populate]=*
&populate[blocks][on][blocks.content][populate]=*
&populate[blocks][on][blocks.quotation][populate]=*
&populate[blocks][on][blocks.gallery-slider][populate]=*
&populate[blocks][on][blocks.cards-section][populate][card][populate][0]=image`,

    { cache: "no-store" }
  );


  const result = await response.json();  // Convert response to JSON format
  
  // If no blog found for given slug, show fallback message
  if (!result.data || !result.data.length) {
    return <div>Blog not found</div>;
  }
 //Extract first blog object from API response
  const blog = result.data[0];


  // Fetch Global Single Type (Banner Image)
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
        <div className="relative w-full h-[35vh] sm:h-[45vh] min-h-[250px]">

          <img
            src={bannerUrl}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                {blog.title}
              </h1>

              <p className="text-base sm:text-xl m-2 text-gray-600">
                {blog.description}
              </p>

              <div className="text-sm font-bold">
                {blog.author?.name}
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto">

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

            case "blocks.cards-section":
              return <CardsBlock key={index} data={block} />;

            default:
              return null;
          }

        })}

      </div>
    </div>
  );
}