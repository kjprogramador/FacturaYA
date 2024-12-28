import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import EditButton from "../Common/EditButton";
import DeleteButton from "../Common/DeleteButton";
import CustomDialog from "../Common/CustomDialog";

const ProductTable = ({ products, onDelete, onEdit }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedProduct);
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Inventario de Productos
        </Typography>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Categoría</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="right">Precio de Venta</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="left">{product.category}</TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="right">${product.sale_price}</TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => onEdit(product)} />
                  <DeleteButton onClick={() => handleDeleteClick(product)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog de confirmación */}
      <CustomDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleConfirmDelete}
        title="Confirmar eliminación"
        description={`¿Estás seguro de que deseas eliminar el producto "${selectedProduct?.name}"? Esta acción no se puede deshacer.`}
      />
    </>
  );
};

export default ProductTable;
