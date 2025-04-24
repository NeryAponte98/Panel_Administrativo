import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './componentes/Layout';
import Clientes from './vistas/Clientes';
import Proveedores from './vistas/Proveedores';
import Usuarios from './vistas/Usuarios';
import Logout from './vistas/Logout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/clientes" />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="/clientes" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
