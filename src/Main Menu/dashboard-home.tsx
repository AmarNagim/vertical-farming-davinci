import { AppBar } from "@mui/material";
import "./dashboard-home.css";
import PrimarySearchAppBar from "./AppBar";
import MainDrawer from "./MainDrawer";

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.939)",
          minHeight: "100vh",
        }}
      >
        <MainDrawer />
        {/* <PrimarySearchAppBar /> */}
      </div>
      {/* <PrimarySearchAppBar /> */}
    </>
  );
};

export default Home;
