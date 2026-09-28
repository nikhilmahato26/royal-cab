import React from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface AboutSectionProps {
  onOpenBookingModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="section section-bg-light" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image with Subtle Accent */}
          <div className="about-image-col">
            <div className="about-image-wrap">
              <img
                src="/images/about-journey.jpg"
                alt="Royal Cab Service comfortable journey in Rajasthan and Gujarat"
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="about-content">
            <div className="section-eyebrow" style={{ alignSelf: 'flex-start' }}>
              ABOUT ROYAL CAB SERVICE
            </div>

            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Travel Made Simple
            </h2>

            <p className="about-lead">
              Royal Cab Service provides transportation and travel-related services including cab booking, vehicle rental, sightseeing transportation and hotel booking assistance. Whether you need a vehicle for local travel, an outstation journey, sightseeing or a customized travel requirement, Royal Cab Service can help arrange the right solution for your trip.
            </p>

            {/* Positioning Callout */}
            <div
              style={{
                background: 'var(--bg-accent-light)',
                borderLeft: '4px solid var(--gold-500)',
                padding: '16px 20px',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--navy-900)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '4px',
                }}
              >
                {BUSINESS_DATA.tagline}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                {BUSINESS_DATA.supportingMessage}
              </p>
            </div>

            {/* Operating Hubs - Jodhpur & Gandhinagar */}
            <div className="about-locations-box">
              <div className="about-locations-header">
                <MapPin size={16} style={{ color: 'var(--gold-600)' }} />
                <span>Operating Hub Locations</span>
              </div>

              <div className="location-cards-grid">
                {/* Jodhpur Hub */}
                <div className="location-mini-card">
                  <h4>
                    <span>Jodhpur</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-700)' }}>
                      (Rajasthan)
                    </span>
                  </h4>
                  <p>{BUSINESS_DATA.locations.jodhpur.fullAddress}</p>
                  <a
                    href={`tel:${BUSINESS_DATA.phones.primary}`}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--navy-900)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Connect Jodhpur</span>
                    <ArrowRight size={13} style={{ color: 'var(--gold-600)' }} />
                  </a>
                </div>

                {/* Gandhinagar Hub */}
                <div className="location-mini-card">
                  <h4>
                    <span>Gandhinagar</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-700)' }}>
                      (Gujarat)
                    </span>
                  </h4>
                  <p>{BUSINESS_DATA.locations.gandhinagar.fullAddress}</p>
                  <a
                    href={`tel:${BUSINESS_DATA.phones.secondary}`}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--navy-900)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Connect Gandhinagar</span>
                    <ArrowRight size={13} style={{ color: 'var(--gold-600)' }} />
                  </a>
                </div>
              </div>
            </div>

            {/* Key Service Highlights Checkmarks */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
                marginTop: '6px',
              }}
            >
              {[
                'Local & Outstation Cab Booking',
                'Flexible Vehicle Rental Solutions',
                'Curated Sightseeing Transport',
                'Coordinated Hotel Booking Support',
              ].map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.85rem',
                    color: 'var(--navy-900)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--gold-600)' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={onOpenBookingModal}
                className="btn btn-gold"
                id="about-discuss-btn"
              >
                <span>Discuss Your Travel Requirement</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
