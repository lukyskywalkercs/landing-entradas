import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../components/Logo';
import EventCard from '../components/EventCard';
import { Calendar, Clock, MapPin, Ticket, Facebook, Instagram, Youtube, Music, Users, Star } from 'lucide-react';

const Index = () => {
  const eventInfo = {
    title: "DELEST + PUK 2",
    subtitle: "+ GRUP CONVIDAT",
    date: "5 d'abril",
    year: "2024",
    venue: "Sala TERRA",
    location: "Castelló",
    doorsTime: "19:00h",
    startTime: "19:30h",
    price: "12€ anticipada",
    priceAtDoor: "15€ en taquilla",
    ticketUrl: "https://entradas.delest-rock.com"
  };

  return (
    <>
      <Helmet>
        <title>DELEST - Concert 10è Aniversari 2015/2025 | 5 d'abril, Sala TERRA</title>
        <meta name="description" content="Celebra amb nosaltres el 10è aniversari de DELEST. Concert especial amb DELEST + PUK 2 i grup convidat a la Sala TERRA de Castelló, 5 d'abril." />
        <meta name="keywords" content="DELEST, concert, música, rock, Castelló, Sala TERRA, PUK 2, aniversari, punkrock" />
        <meta property="og:title" content="DELEST - Concert 10è Aniversari 2015/2025" />
        <meta property="og:description" content="5 d'abril a la Sala TERRA de Castelló. DELEST + PUK 2 i grup convidat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://entradas.delest-rock.com" />
        <meta property="og:image" content="/lovable-uploads/e03e7e2c-e227-4fd7-bd5f-1921a7e12473.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/lovable-uploads/e03e7e2c-e227-4fd7-bd5f-1921a7e12473.png" />
        <link rel="canonical" href="https://entradas.delest-rock.com" />
      </Helmet>

      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <header className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-concert-gold mb-2 font-display tracking-wider">
              CONCERT 10 ANIVERSARI DELEST
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mt-2 text-white/80">
              <span className="text-concert-gold">2015</span> / <span className="text-concert-gold">2025</span> · 10 ANYS... I QUÈ??
            </h2>
          </header>
          
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            <section className="w-full md:w-2/3 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/e03e7e2c-e227-4fd7-bd5f-1921a7e12473.png" 
                  alt="DELEST Concert 10è Aniversari - Poster Oficial" 
                  className="max-w-full rounded-lg shadow-2xl transition-all duration-300 group-hover:shadow-concert-gold/30"
                  width="600"
                  height="800"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </section>
            
            <section className="w-full md:w-1/3">
              <EventCard 
                title={eventInfo.title}
                subtitle={eventInfo.subtitle}
                date={`${eventInfo.date}, ${eventInfo.location}`}
                venue={eventInfo.venue}
                doorsTime={eventInfo.doorsTime}
                startTime={eventInfo.startTime}
                price={eventInfo.price}
                priceAtDoor={eventInfo.priceAtDoor}
                imageUrl="/lovable-uploads/e03e7e2c-e227-4fd7-bd5f-1921a7e12473.png"
                ticketUrl={eventInfo.ticketUrl}
              />
            </section>
          </div>
          
          <section className="my-12 text-center animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0 }}>
            <h2 className="sr-only">Segueix-nos a les xarxes socials</h2>
            <div className="flex justify-center gap-6">
              <a href="https://fb.me/e/8uYylRxJx" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 bg-concert-black/30 rounded-full hover:bg-concert-gold/20 transition-colors">
                <Facebook className="h-6 w-6 text-concert-gold" />
              </a>
              <a href="https://instagram.com/delestrock" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-concert-black/30 rounded-full hover:bg-concert-gold/20 transition-colors">
                <Instagram className="h-6 w-6 text-concert-gold" />
              </a>
              <a href="https://youtube.com/@delestrock" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="p-3 bg-concert-black/30 rounded-full hover:bg-concert-gold/20 transition-colors">
                <Youtube className="h-6 w-6 text-concert-gold" />
              </a>
            </div>
          </section>
          
          <div className="hidden">
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MusicEvent",
                "name": "DELEST - Concert 10è Aniversari",
                "startDate": "2024-04-05T19:30:00+02:00",
                "endDate": "2024-04-05T23:00:00+02:00",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "location": {
                  "@type": "Place",
                  "name": "Sala TERRA",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Castelló",
                    "addressCountry": "ES"
                  }
                },
                "performer": [
                  {
                    "@type": "MusicGroup",
                    "name": "DELEST"
                  },
                  {
                    "@type": "MusicGroup",
                    "name": "PUK 2"
                  }
                ],
                "offers": {
                  "@type": "Offer",
                  "url": "https://entradas.delest-rock.com",
                  "price": "12",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01T00:00:00+01:00"
                },
                "image": "/lovable-uploads/e03e7e2c-e227-4fd7-bd5f-1921a7e12473.png",
                "description": "Celebra amb nosaltres el 10è aniversari de DELEST. Concert especial amb DELEST + PUK 2 i grup convidat."
              })}
            </script>
          </div>
        </div>
        
        <footer className="mt-auto pt-8 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Delest. Tots els drets reservats.</p>
          <nav className="mt-2">
            <a href="https://entradas.delest-rock.com" className="hover:text-concert-gold hover:underline mr-3 transition-colors" target="_blank" rel="noopener noreferrer">entradas.delest-rock.com</a> | 
            <a href="https://terraconcerts.com" className="hover:text-concert-gold hover:underline ml-3 transition-colors" target="_blank" rel="noopener noreferrer">terraconcerts.com</a>
          </nav>
        </footer>
      </main>
    </>
  );
};

export default Index;
