import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simula el cierre de sesión
      navigate('/');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="card">
      <div className="card-header bg-danger text-white">
        <h2>Cerrando Sesión</h2>
      </div>
      <div className="card-body text-center">
        <div className="spinner-border mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="lead">Cerrando tu sesión, por favor espera...</p>
      </div>
    </div>
  );
};

export default Logout;