import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Product from "../Product/Product";
import "./ProductsList.css";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="products">
      <h1 className="page--title">Desserts</h1>
      <div className="products-list">
        {products.map((prod) => (
          <Product key={prod} prod={prod} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
