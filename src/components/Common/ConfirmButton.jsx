import { Button } from "@mui/material";

const ConfirmButton = ({
  onClick,
  text = "Confirmar",
  color = "error",
  ...props
}) => (
  <Button onClick={onClick} color={color} variant="contained" {...props}>
    {text}
  </Button>
);

export default ConfirmButton;
