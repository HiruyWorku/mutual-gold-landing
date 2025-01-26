import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gs-dark text-gs-white p-4 font-lato">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Goldman Sachs
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gs-blue transition-colors">
            Home
          </Link>
          <Link to="/calculator" className="hover:text-gs-blue transition-colors">
            MF Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;