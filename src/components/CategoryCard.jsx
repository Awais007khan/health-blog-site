const CategoryCard = ({ title, image }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
