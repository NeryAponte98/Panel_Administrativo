import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container flex-grow-1 py-4">
        {children}
      </main>
      <footer className="py-3 text-center">
        <p className="mb-0">Panel Administrativo &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;