import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CustomButton({ children, to, variant = "contained", size = "medium", sx = {}, ...props }) {
  return (
    <Button
      component={to ? Link : "button"}
      to={to}
      variant={variant}
      size={size}
      sx={{
        minWidth: 135,
        height: 40,
        borderRadius: 1,
        fontWeight: 700,
        fontSize: { xs: 12, md: 14 },
        boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
        "&:hover": {
          backgroundColor: "primary.dark",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
