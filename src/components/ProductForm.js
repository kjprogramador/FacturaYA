import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import useInventoryStore from "../stores/inventoryStore";

const ProductForm = ({ open, handleClose, product }) => {
  const { addProduct, updateProduct } = useInventoryStore();
  const [formData, setFormData] = useState(product || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (product) {
      updateProduct(formData);
    } else {
      addProduct({ ...formData, id: Date.now() });
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {product ? "Editar Producto" : "Agregar Producto"}
      </DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Nombre"
          onChange={handleChange}
          value={formData.name || ""}
          fullWidth
        />
        {/* Agrega los otros campos aquí */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {product ? "Actualizar" : "Agregar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
