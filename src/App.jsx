import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/home";
import { AddFlats } from "./components/AddFlats/addFlats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addFlats" element={<AddFlats />} />
      </Routes>
    </div>
  );
}

export default App;
