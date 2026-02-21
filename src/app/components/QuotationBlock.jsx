export default function QuotationBlock({ data }) {

  const colorMap = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
    purple: "border-purple-500",
    gray: "border-gray-500",
  };

  const borderColor = colorMap[data.backgroundColor] || "border-gray-500";

  return (
    <div
      className={`
        bg-gray-200
        border-l-5
        border-r-5
        border-t-2 
        border-b-2
        ${borderColor}
        p-5 
        mb-10 
        rounded-xl
        transition-all duration-500
        hover:shadow-xl
        
        hover:bg-white
      `}
    >
      {/* Heading */}
      {data.heading && (
        <h3 className="text-xl font-semibold mb-4">
          {data.heading}
        </h3>
      )}

      {/* Body with line breaks */}
      <div className="text-gray-700 italic px-5">
        {data.body
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
            <p key={index}>{line}</p>
        ))}
        </div>
    </div>
  );
}