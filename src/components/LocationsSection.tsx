import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const LocationsSection: React.FC = () => {
  return (
    <section className="section section-bg-light" id="locations">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">STRATEGIC OPERATING BASES</div>
          <h2 className="section-title">Our Business Locations</h2>
          <p className="section-subtitle">
            Royal Cab Service proudly operates from two key regions in Rajasthan and Gujarat, delivering dependable cab and travel solutions.
          </p>
        </div>

        {/* Dual Location Cards */}
        <div className="locations-showcase-grid">
          {/* 1. Primary Hub: Jodhpur, Rajasthan */}
          <div className="location-full-card">
            <div>
              <div className="location-badge-tag">
                <MapPin size={13} />
                <span>Primary Operating Location</span>
              </div>

              <h3>Jodhpur, Rajasthan</h3>

              <div className="location-address-box">
                <p style={{ fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Royal Cab Service – Jodhpur Desk
                </p>
                {BUSINESS_DATA.locations.jodhpur.addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Primary Contact Hotline:
                </div>
                <a
                  href={`tel:${BUSINESS_DATA.phones.primary}`}
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--navy-900)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={18} style={{ color: 'var(--gold-600)' }} />
                  <span>{BUSINESS_DATA.phones.primaryDisplay}</span>
                </a>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <a
                href={`tel:${BUSINESS_DATA.phones.primary}`}
                className="btn btn-navy btn-sm"
              >
                <Phone size={14} style={{ color: 'var(--gold-400)' }} />
                <span>Call Jodhpur</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  BUSINESS_DATA.locations.jodhpur.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold btn-sm"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* 2. Second Hub: Gandhinagar, Gujarat */}
          <div className="location-full-card">
            <div>
              <div className="location-badge-tag">
                <MapPin size={13} />
                <span>Second Operating Location</span>
              </div>

              <h3>Gandhinagar, Gujarat</h3>

              <div className="location-address-box">
                <p style={{ fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Royal Cab Service – Gandhinagar Desk
                </p>
                {BUSINESS_DATA.locations.gandhinagar.addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Branch Contact Hotline:
                </div>
                <a
                  href={`tel:${BUSINESS_DATA.phones.secondary}`}
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--navy-900)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={18} style={{ color: 'var(--gold-600)' }} />
                  <span>{BUSINESS_DATA.phones.secondaryDisplay}</span>
                </a>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <a
                href={`tel:${BUSINESS_DATA.phones.secondary}`}
                className="btn btn-navy btn-sm"
              >
                <Phone size={14} style={{ color: 'var(--gold-400)' }} />
                <span>Call Gandhinagar</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  BUSINESS_DATA.locations.gandhinagar.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold btn-sm"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
