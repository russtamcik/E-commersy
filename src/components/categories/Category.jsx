import { categories } from "../../data/categories";

import "../../sass/Category.scss";

const Category = () => {
  return (
    <div className="category">
      {categories.map((el) => (
        <div key={el.id} className="products">
          <img src={el.image} alt={el.name} />
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
