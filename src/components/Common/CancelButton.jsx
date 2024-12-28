import { Button } from "@mui/material";

const CancelButton = ({
  onClick,
  text = "Cancelar",
  color = "primary",
  ...props
}) => (
  <Button onClick={onClick} color={color} {...props}>
    {text}
  </Button>
);

export default CancelButton;
