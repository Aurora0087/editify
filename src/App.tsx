import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DefultLayout from "./pages/DefultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefultLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
