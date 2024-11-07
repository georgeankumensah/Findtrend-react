import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Homepage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />} path="/">
        <Route element={<Homepage />} index />
      </Route>
    </Routes>
  );
}

export default App;
