import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ConfirmButton from "./ConfirmButton";
import CancelButton from "./CancelButton";

const CustomDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{description}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <CancelButton onClick={onClose} text={cancelText} />
      <ConfirmButton onClick={onConfirm} text={confirmText} />
    </DialogActions>
  </Dialog>
);

export default CustomDialog;
