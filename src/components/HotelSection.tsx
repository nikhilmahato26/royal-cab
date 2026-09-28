import React from 'react';
import { Hotel, ArrowRight, Check, BedDouble } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface HotelSectionProps {
  onEnquireHotel: (category?: string) => void;
}

export const HotelSection: React.FC<HotelSectionProps> = ({ onEnquireHotel }) => {
  return (
    <section className="section section-bg-light" id="hotels">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">ACCOMMODATION &amp; INTEGRATED ARRANGEMENTS</div>
          <h2 className="section-title">Stay Along the Way</h2>
          <p className="section-subtitle">
            Planning a trip? Royal Cab Service also provides hotel booking assistance to help you organize your transportation and accommodation requirements together.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="hotel-grid">
          {BUSINESS_DATA.hotelOptions.map((opt) => (
            <div key={opt.id} className="hotel-card">
              <div className="hotel-card-img-wrap">
                <img
                  src={opt.image}
                  alt={`Royal Cab Service ${opt.title}`}
                  className="hotel-card-img"
                  loading="lazy"
                />
                <span className="vehicle-badge">{opt.badge}</span>
              </div>

              <div className="hotel-card-body">
                <div>
                  <h3 className="hotel-card-title">{opt.title}</h3>
                  <p className="hotel-card-desc">{opt.description}</p>

                  <ul className="service-features-list">
                    {opt.features.map((f, i) => (
                      <li key={i}>
                        <Check size={15} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button
                    onClick={() => onEnquireHotel(opt.title)}
                    className="btn btn-navy"
                    style={{ width: '100%' }}
                    id={`hotel-btn-${opt.id}`}
                  >
                    <span>Enquire for {opt.title}</span>
                    <ArrowRight size={15} style={{ color: 'var(--gold-400)' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Call to Action */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-gold)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px 30px',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'var(--navy-gradient)',
              color: 'var(--gold-400)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
            }}
          >
            <BedDouble size={26} />
          </div>
          <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
            Looking for a Coordinated Travel + Accommodation Plan?
          </h3>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              maxWidth: '620px',
              margin: '0 auto 22px auto',
            }}
          >
            Let our support desk know your stopovers and stay preferences. We coordinate your vehicle pickups and accommodation support together.
          </p>
          <button
            onClick={() => onEnquireHotel('Hotel Booking Assistance')}
            className="btn btn-gold btn-lg"
            id="hotel-enquire-main-btn"
          >
            <Hotel size={18} />
            <span>Enquire for Hotel Booking</span>
          </button>
        </div>
      </div>
    </section>
  );
};
