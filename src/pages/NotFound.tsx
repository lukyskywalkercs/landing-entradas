
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-5xl font-bold mb-6 text-amber-500 font-display">404</h1>
        <p className="text-xl mb-8">La pàgina que busques no existeix</p>
        <Link 
          to="/" 
          className="button-buy bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 inline-block"
        >
          Tornar a l'inici
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
