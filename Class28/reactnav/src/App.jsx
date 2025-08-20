import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Useeffect from "./components/useeffect";
import Useref from "./components/Useref";
function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/use-effect" element={<Useeffect />} />
          <Route path="/use-ref" element={<Useref />} />
        </Routes>
    </>
  );
}

export default App;
