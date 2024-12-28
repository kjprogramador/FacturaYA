import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ onClick, tooltip = "Eliminar", ...props }) => (
  <Tooltip title={tooltip}>
    <IconButton onClick={onClick} color="error" aria-label="delete" {...props}>
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

export default DeleteButton;
