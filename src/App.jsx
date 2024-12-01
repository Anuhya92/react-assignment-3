import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter/Counter";
import ChooseTheme from "./pages/ChooseTheme/ChooseTheme";
import { createContext, useState } from "react";
import ToDoList from "./pages/ToDoList/ToDoList";

export const ThemeContext = createContext();
const DEFAULT_COLOR = "#333";

function App() {
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR);

  return (
    <ThemeContext.Provider value={{ selectedColor, setSelectedColor }}>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<ChooseTheme />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer></Footer>
    </ThemeContext.Provider>
  );
}

export default App;
