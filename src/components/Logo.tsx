
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center animate-fade-right" style={{ animationDelay: '0.2s', opacity: 0 }}>
      <a 
        href="https://entradas.delest-rock.com" 
        title="DELEST - Pàgina principal" 
        className="text-concert-gold hover:text-white text-2xl md:text-3xl font-bold tracking-wider transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        DELEST
      </a>
    </div>
  );
};

export default Logo;
