"use client"; // This component runs on the client side (required for animations & hover effects)

export default function FeaturesBlock({ data }) {
  // If no features are available from Strapi, don't render anything
  if (!data?.Feature?.length) return null;

  // Extract features array from Strapi response
  const features = data.Feature;

  // Configuration object:
  // Maps each Feature enum to its description and background color
  // This avoids adding description manually in Strapi
  const featureConfig = {
    "Beginner Friendly": {
      description:
        "Designed especially for beginners with simple explanations.",
      bg: "bg-green-100", // Tailwind background color
    },
    "Step-by-Step Guidance": {
      description:
        "Concepts are explained in structured steps.",
      bg: "bg-blue-100",
    },
    "In-Depth Explanation": {
      description:
        "Deep understanding with detailed breakdown.",
      bg: "bg-purple-100",
    },
    "Real-World Examples": {
      description:
        "Industry-based practical examples.",
      bg: "bg-yellow-100",
    },
    "Practical Tips": {
      description:
        "Smart productivity techniques.",
      bg: "bg-pink-100",
    },
  };

  return (
    // Main wrapper with vertical spacing and hidden overflow
    // overflow-hidden prevents scroll content from showing outside container
    <div className="my-20 overflow-hidden">

      {/* Render heading only if provided from Strapi */}
      {data.heading && (
        <h2 className="text-3xl font-bold text-center mb-4">
          {data.heading}
        </h2>
      )}

      {/* Render description only if provided */}
      {data.description && (
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          {data.description}
        </p>
      )}

      {/* Container for horizontal scrolling */}
      {/* group enables hover interaction to pause animation */}
      <div className="relative group w-full overflow-hidden">

        {/* 
          flex → horizontal layout
          w-max → width equals total content width (important for smooth infinite scroll)
          animate-marquee → custom CSS animation
          group-hover → pause animation when hovered
        */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">

          {/* 
            Duplicate features array to create seamless infinite scroll illusion
            Example: 1,2,3 → 1,2,3,1,2,3
          */}
          {[...features, ...features].map((item, index) => {

            // Get config based on selected Feature enum
            // If not found, use default fallback
            const config =
              featureConfig[item.Feature] || {
                description: "Powerful feature.",
                bg: "bg-gray-100",
              };

            return (
              <div
                key={index}
                // Dynamic background color + card styling
                // min-w ensures consistent card width for smooth scrolling
                className={`${config.bg} min-w-[300px] mx-4 p-6 rounded-2xl shadow-md`}
              >
                {/* Feature Title */}
                <h3 className="font-semibold mb-2">
                  {item.Feature}
                </h3>

                {/* Auto-generated Description */}
                <p className="text-sm text-gray-700">
                  {config.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}