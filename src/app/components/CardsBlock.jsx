// CardsBlock component renders a grid of cards from Strapi data
export default function CardsBlock({ data }) {

  // If no cards exist, do not render component
  if (!data?.card?.length) return null;

  return (
    // Main wrapper with vertical margin spacing
    <div className="my-14">

      {/* Render section title only if provided */}
      {data.title && (
        <h2 className="text-3xl font-bold mb-8 text-center">
          {data.title}
        </h2>
      )}

      {/* Responsive Grid Layout */}
      {/* 1 column on mobile, 2 on small screens, 3 on medium+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Loop through each card */}
        {data.card.map((card, index) => {

          // Safely extract image URL (handles different Strapi structures)
          const imageUrl =
            card.image?.url ??
            card.image?.data?.attributes?.url ??
            null;

          return (
            <div
              key={index}
              // Card styling
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >

              {/* Image Section - Render only if image exists */}
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Content Section */}
              <div className="p-6">

                {/* Card Title */}
                <h3 className="text-lg font-semibold mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <div className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}