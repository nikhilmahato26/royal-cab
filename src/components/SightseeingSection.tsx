import React from 'react';
import { Compass, ArrowRight, Camera } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface SightseeingSectionProps {
  onPlanSightseeing: (categoryTitle?: string) => void;
}

export const SightseeingSection: React.FC<SightseeingSectionProps> = ({ onPlanSightseeing }) => {
  return (
    <section className="section section-bg-alt" id="sightseeing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">DESTINATION &amp; TRAVEL TRANSPORTATION</div>
          <h2 className="section-title">Explore More. Travel Comfortably.</h2>
          <p className="section-subtitle">
            Reliable vehicle arrangements and courteous route transportation for your sightseeing excursions and travel itineraries.
          </p>
        </div>

        {/* 6 Category Cards */}
        <div className="sightseeing-grid">
          {BUSINESS_DATA.sightseeingCategories.map((cat) => (
            <div
              key={cat.id}
              className="sightseeing-card"
              onClick={() => onPlanSightseeing(cat.title)}
            >
              <img
                src={cat.image}
                alt={`Royal Cab Service ${cat.title}`}
                className="sightseeing-img"
                loading="lazy"
              />
              <div className="sightseeing-overlay">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--gold-400)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '4px',
                  }}
                >
                  <Camera size={13} />
                  <span>Sightseeing Arrangement</span>
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--gold-300)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                  }}
                >
                  <span>Select &amp; Enquire</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            onClick={() => onPlanSightseeing()}
            className="btn btn-gold btn-lg"
            id="plan-sightseeing-btn"
          >
            <Compass size={18} />
            <span>Plan Your Sightseeing Trip</span>
          </button>
        </div>
      </div>
    </section>
  );
};
