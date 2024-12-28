import ProductTable from "../components/Inventory/ProductTable";
import { useProducts } from "../hooks/useProducts";

const Products = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products. Please try again later.</p>;

  return (
    <div>
      <h1>Inventario</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default Products;
