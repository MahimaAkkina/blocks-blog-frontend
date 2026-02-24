export default function ContentBlock({ data }) {
  return (
    <div className="content-block max-w-none mb-8 text-justify">
      {data.content?.map((item, i) => {

        // Helper function to render children with styles
        const renderChildren = (children) =>
          children.map((child, j) => {
            let text = child.text;

            if (child.bold) {
              text = <strong key={j}>{text}</strong>;
            }
            if (child.italic) {
              text = <em key={j}>{text}</em>;
            }
            return <span key={j}>{text}</span>;
          });

        switch (item.type) {

          case "paragraph":
            return (
              <p key={i} className="mb-4">
                {renderChildren(item.children)}
              </p>
            );

          case "heading": 
          return ( 
            <h3 key={i} className="text-2xl font-bold mb-4 mt-6"> 
                {item.children.map((child) => child.text)} 
            </h3> 
            );

          case "list":
            if (item.format==="unordered"){
              return (
                <ul key={i} className="list-disc pl-6 mb-4">
                  {item.children.map((li, j) => (
                    <li key={j}>
                      {renderChildren(li.children)}
                    </li>
                  ))}
                </ul>
              );
            } else {
              return (
                <ol key={i} className="list-decimal pl-6 mb-4">
                  {item.children.map((li, j) => (
                    <li key={j}>
                      {renderChildren(li.children)}
                    </li>
                  ))}
                </ol>
              );
            }

          default:
            return null;
        }
      })}
    </div>
  );
}