import categoryTiles from "../../data/categoryTiles";

const CategoryTiles = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-[100%] gap-4">
      {categoryTiles.map((tile) => (
        <div className="relative cursor-pointer rounded-[1.5rem]">
          <img
            src={tile.image}
            alt=""
            className="h-full w-full object-cover bg-gradient-to-r from-black to-transparent rounded-[1.5rem]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
          <p className="absolute bottom-4 left-4 text-white text-[1.8rem] font-semibold">
            {tile.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default CategoryTiles;
