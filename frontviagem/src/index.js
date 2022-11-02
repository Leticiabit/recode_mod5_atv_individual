import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Clientes from "./Clientes";
import Destinos from "./Destinos";
import Viagens from "./Viagens";
import './css/styles.css'

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="viagens" element={<Viagens />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);