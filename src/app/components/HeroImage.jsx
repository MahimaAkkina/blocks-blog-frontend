export default function HeroImage({ data }) {

  const imageUrl =  data.heroImage?.url
     ? `http://localhost:1337${data.heroImage.url}`
    : null;

  return (
    <div className="relative w-full h-[60vh] min-h-[350px] rounded-3xl overflow-hidden mb-10 group">

      {/* Background Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out 
                     animate-[zoom_5s_linear_infinite]"
        />
      )}

       

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
          {data.title}
        </h2>

        <p className="max-w-2xl text-base sm:text-lg opacity-90 drop-shadow-md">
          {data.description}
        </p>

      </div>
    </div>
  );
}