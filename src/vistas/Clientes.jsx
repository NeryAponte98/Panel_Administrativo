const Clientes = () => {
  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h2>Gestión de Clientes</h2>
      </div>
      <div className="card-body">
        <p className="lead">Bienvenido a la sección de administración de clientes.</p>
        
        <div className="alert alert-info">
          <i className="bi bi-info-circle me-2"></i>
          Esta sección está en desarrollo.
        </div>
        
        <button className="btn btn-primary mt-3">
          <i className="bi bi-plus-circle me-2"></i>
          Añadir cliente
        </button>
      </div>
    </div>
  );
};

export default Clientes;