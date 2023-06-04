import { useState } from "react";
import "./normalize.css";
import Header from "./components/molecules/Header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Users from "./pages/users/Users";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<Users />} />
          </Routes>
        </Header>
        
      </BrowserRouter>
    </>
  );
}

export default App;
