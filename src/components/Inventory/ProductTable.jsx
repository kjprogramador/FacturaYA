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

const ProductTable = ({ products }) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Inventario de Productos
      </Typography>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Categoría</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="right">Precio de Venta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index} hover>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">{product.category}</TableCell>
              <TableCell align="center">{product.quantity}</TableCell>
              <TableCell align="right">${product.sale_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
