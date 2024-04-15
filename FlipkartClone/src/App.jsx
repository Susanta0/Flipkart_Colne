import "./App.css";
import { DropdownNavbar } from "./Components/DropdownNavbar";
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Products";
import { ResSlider } from "./Components/Slider";

function App() {
  return (
    <>
      <Navbar />

      <DropdownNavbar />

      <ResSlider />
      <Products />
    </>
  );
}

export default App;
