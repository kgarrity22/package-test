import { Button, ButtonProps } from "@mui/material";

const MyButton = ({ ...props }: ButtonProps) => {
  return <Button {...props} />;
};
export default MyButton;
