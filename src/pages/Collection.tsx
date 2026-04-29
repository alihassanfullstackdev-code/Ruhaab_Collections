const Collections = () => {
  const series = [
    { title: "Velvet Noir '26", img: "url-to-velvet" },
    { title: "Zari Heritage", img: "url-to-zari" }
  ];

  return (
    <div className="pt-48 px-8 md:px-16 bg-base min-h-screen">
      <div className="flex flex-col gap-32">
        {series.map((item, i) => (
          <div key={i} className="group relative h-[70vh] w-full overflow-hidden cursor-pointer">
            <img 
              src={item.img} 
              className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-base/20">
              <h2 className="font-display italic text-5xl md:text-8xl text-paper mix-blend-difference">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;