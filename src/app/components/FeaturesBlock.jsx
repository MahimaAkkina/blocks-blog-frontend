"use client";

export default function FeaturesBlock({ data }) {
  if (!data?.Feature?.length) return null;

  const features = data.Feature;

  const featureConfig = {
    "Beginner Friendly": {
      description:
        "Designed especially for beginners with simple explanations.",
      bg: "bg-green-100",
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
    <div className="my-20 overflow-hidden">

      {data.heading && (
        <h2 className="text-3xl font-bold text-center mb-4">
          {data.heading}
        </h2>
      )}

      {data.description && (
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          {data.description}
        </p>
      )}

      <div className="relative group w-full overflow-hidden">

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">

          {[...features, ...features].map((item, index) => {
            const config =
              featureConfig[item.Feature] || {
                description: "Powerful feature.",
                bg: "bg-gray-100",
              };

            return (
              <div
                key={index}
                className={`${config.bg} min-w-[300px] mx-4 p-6 rounded-2xl shadow-md`}
              >
                <h3 className="font-semibold mb-2">
                  {item.Feature}
                </h3>

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