import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2 }} // Margin to compensate for the sidebar
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
