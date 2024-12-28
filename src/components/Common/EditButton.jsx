import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditButton = ({ onClick, ...props }) => (
  <IconButton onClick={onClick} color="primary" aria-label="edit" {...props}>
    <EditIcon />
  </IconButton>
);

export default EditButton;
