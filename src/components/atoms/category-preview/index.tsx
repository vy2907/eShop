import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from 'src/setting/context/categories.context';
import { ProductCard } from '../product-card';

export interface CategoryPreviewProps {
  title: string;
  products: IProduct[];
}

export const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, products }) => (
  <div className="a-category-preview">
    <h2>
      <Link className="title" to={title}>
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);
