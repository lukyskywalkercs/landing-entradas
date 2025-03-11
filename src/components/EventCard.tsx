
import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';

interface EventCardProps {
  title: string;
  subtitle?: string;
  date: string;
  venue: string;
  doorsTime: string;
  startTime: string;
  price: string;
  priceAtDoor?: string;
  imageUrl: string;
  description?: string;
  ticketUrl?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  subtitle,
  date,
  venue,
  doorsTime,
  startTime,
  price,
  priceAtDoor,
  imageUrl,
  description,
  ticketUrl
}) => {
  return (
    <article className="event-card w-full max-w-md mx-auto bg-concert-black/80 border border-concert-gold/30 rounded-lg overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
      <header className="p-6 border-b border-concert-gold/20 bg-gradient-to-r from-black to-black/60">
        <h2 className="font-bold text-2xl mb-2 text-concert-gold font-display tracking-wide">{title}</h2>
        {subtitle && <h3 className="font-medium text-lg text-white/90 mb-2">{subtitle}</h3>}
        {description && <p className="text-white/70 text-sm mb-4">{description}</p>}
      </header>
      
      <div className="p-0 relative">
        <img 
          src={imageUrl} 
          alt={`Concert de ${title}`} 
          className="w-full h-52 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      <div className="p-6 space-y-4 bg-gradient-to-b from-black/80 to-black">
        <div className="flex items-center text-sm text-white/90">
          <Calendar className="h-4 w-4 mr-2 text-concert-gold" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-sm text-white/90">
          <MapPin className="h-4 w-4 mr-2 text-concert-gold" />
          <span>{venue}</span>
        </div>
        
        <div className="flex items-center text-sm text-white/90">
          <Clock className="h-4 w-4 mr-2 text-concert-gold" />
          <span>{doorsTime} Portes | {startTime} Concerts</span>
        </div>
        
        <div className="flex items-center text-sm text-white/90">
          <Ticket className="h-4 w-4 mr-2 text-concert-gold" />
          <span>PREU: {price}{priceAtDoor && ` | ${priceAtDoor}`}</span>
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-concert-gold/20">
          <div className="bg-white p-2 rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H21V21H3V3Z" fill="white"/>
              <path d="M4 4H20V20H4V4Z" fill="black"/>
              <path d="M6 6H8V8H6V6Z" fill="white"/>
              <path d="M10 6H12V8H10V6Z" fill="white"/>
              <path d="M14 6H16V8H14V6Z" fill="white"/>
              <path d="M18 6H20V8H18V6Z" fill="white"/>
              <path d="M6 10H8V12H6V10Z" fill="white"/>
              <path d="M10 10H12V12H10V10Z" fill="white"/>
              <path d="M14 10H16V12H14V10Z" fill="white"/>
              <path d="M18 10H12V12H18V10Z" fill="white"/>
              <path d="M6 14H8V16H6V14Z" fill="white"/>
              <path d="M10 14H12V16H10V14Z" fill="white"/>
              <path d="M14 14H16V16H14V14Z" fill="white"/>
              <path d="M18 14H20V16H18V14Z" fill="white"/>
              <path d="M6 18H8V20H6V18Z" fill="white"/>
              <path d="M10 18H12V20H10V18Z" fill="white"/>
              <path d="M14 18H16V20H14V18Z" fill="white"/>
              <path d="M18 18H20V20H18V18Z" fill="white"/>
            </svg>
          </div>
          
          {ticketUrl ? (
            <a 
              href={ticketUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-buy bg-gradient-to-r from-amber-500 to-concert-gold text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-concert-gold/30 hover:shadow-concert-gold/50 hover:scale-105 uppercase text-center"
              aria-label="Comprar entrades pel concert"
            >
              Comprar Entrades
            </a>
          ) : (
            <button 
              className="button-buy bg-gradient-to-r from-amber-500 to-concert-gold text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-concert-gold/30 hover:shadow-concert-gold/50 hover:scale-105 uppercase text-center"
              aria-label="Comprar entrades pel concert"
            >
              Comprar Entrades
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
