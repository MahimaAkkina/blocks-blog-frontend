export default function CardsBlock({ data }) {
  if (!data?.card?.length) return null;

  return (
    <div className="my-14">
      {data.title && (
        <h2 className="text-3xl font-bold mb-8 text-center">
          {data.title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.card.map((card, index) => {
          const imageUrl = card.image?.url ?? card.image?.data?.attributes?.url ?? null;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {card.title}
                </h3>

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