import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/home";
import { AddFlats } from "./components/AddFlats/addFlats";
import { FlatsDetails } from "./components/FlatsDetailsPage/flatsDetailsPage";
import { AddResidents } from "./components/AddResidents/addResidents";
import { NotFound } from "./components/NotFound/notfound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addFlats" element={<AddFlats />} />
        <Route path="/flat/:id" element={<FlatsDetails />} />
        <Route path="/addResidents/:id" element={<AddResidents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
