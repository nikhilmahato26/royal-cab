import React from 'react';
import { Car, Compass, Camera, Hotel } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      title: 'All Vehicle Requirements',
      desc: 'Vehicle options based on customer requirements.',
      icon: <Car size={24} />,
    },
    {
      title: 'Cab Booking',
      desc: 'Convenient cab booking for different travel needs.',
      icon: <Compass size={24} />,
    },
    {
      title: 'Sightseeing',
      desc: 'Transportation for sightseeing and travel experiences.',
      icon: <Camera size={24} />,
    },
    {
      title: 'Hotel Booking',
      desc: 'Hotel booking assistance for travel requirements.',
      icon: <Hotel size={24} />,
    },
  ];

  return (
    <section className="trust-strip" aria-label="Key Service Highlights">
      <div className="container">
        <div className="trust-grid">
          {items.map((item, idx) => (
            <div key={idx} className="trust-item">
              <div className="trust-icon-box">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
