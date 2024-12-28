import ProductTable from "../components/Inventory/ProductTable";
import { useProducts } from "../hooks/useProducts";

const Inventory = () => {
  const { data: products, isLoading, isError } = useProducts();

  const handleDelete = (product) => {
    console.log("Producto eliminado:", product);
    // Aquí puedes manejar la lógica para eliminar el producto
  };

  const handleEdit = (product) => {
    console.log("Editar producto:", product);
    // Aquí puedes manejar la lógica para editar el producto
  };

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products. Please try again later.</p>;

  return (
    <div>
      <h1>Inventario</h1>
      <ProductTable
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Inventory;
