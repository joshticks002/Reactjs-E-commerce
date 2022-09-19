import { Link } from "react-router-dom";
import ProductCard from "../products-card/products-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const link = `${title}`;

  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={link}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
