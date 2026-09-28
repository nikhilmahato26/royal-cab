import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { createGeneralWhatsAppLink } from '../utils/communication';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Positioning */}
          <div className="footer-col">
            <div style={{ marginBottom: '16px' }}>
              <img
                src="/images/branding/royal-logo-white.svg"
                alt="Royal Cab Service"
                style={{ height: '54px', width: 'auto' }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--gold-400)',
                fontSize: '1rem',
                marginBottom: '8px',
              }}
            >
              {BUSINESS_DATA.tagline}
            </p>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {BUSINESS_DATA.supportingMessage}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              {BUSINESS_DATA.services.map((s) => (
                <li key={s.id}>
                  <a href="#services">
                    <ChevronRight size={14} style={{ color: 'var(--gold-400)' }} />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#hotels">
                  <ChevronRight size={14} style={{ color: 'var(--gold-400)' }} />
                  <span>Hotel Booking Assistance</span>
                </a>
              </li>
              <li>
                <a href="#sightseeing">
                  <ChevronRight size={14} style={{ color: 'var(--gold-400)' }} />
                  <span>Sightseeing Arrangements</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Vehicle Options */}
          <div className="footer-col">
            <h4>Vehicle Categories</h4>
            <ul className="footer-links">
              {BUSINESS_DATA.vehicleCategories.map((v) => (
                <li key={v.id}>
                  <a href="#vehicles">
                    <ChevronRight size={14} style={{ color: 'var(--gold-400)' }} />
                    <span>{v.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#journey">
                  <ChevronRight size={14} style={{ color: 'var(--gold-400)' }} />
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <ChevronRight size={14} style={{ color: 'var(--gold-400)' }} />
                  <span>Contact Royal Cab</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Locations & Contact Numbers */}
          <div className="footer-col">
            <h4>Operating Hubs</h4>
            <div className="footer-contact-list">
              {/* Primary Address */}
              <div className="footer-contact-item">
                <MapPin size={18} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>
                    Primary Location (Rajasthan):
                  </strong>
                  <span>{BUSINESS_DATA.locations.jodhpur.fullAddress}</span>
                </div>
              </div>

              {/* Second Address */}
              <div className="footer-contact-item">
                <MapPin size={18} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>
                    Second Location (Gujarat):
                  </strong>
                  <span>{BUSINESS_DATA.locations.gandhinagar.fullAddress}</span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>
                    Call Hotlines:
                  </strong>
                  <div>
                    <a
                      href={`tel:${BUSINESS_DATA.phones.primary}`}
                      style={{ color: 'var(--gold-400)', fontWeight: 600 }}
                    >
                      {BUSINESS_DATA.phones.primaryDisplay}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:${BUSINESS_DATA.phones.secondary}`}
                      style={{ color: 'var(--gold-400)', fontWeight: 600 }}
                    >
                      {BUSINESS_DATA.phones.secondaryDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '2px' }}>
                    Customer Email:
                  </strong>
                  <a
                    href={`mailto:${BUSINESS_DATA.email}`}
                    style={{ color: '#E2E8F0', wordBreak: 'break-all' }}
                  >
                    {BUSINESS_DATA.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} <strong>{BUSINESS_DATA.name}</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Jodhpur, Rajasthan</span>
            <span>•</span>
            <span>Gandhinagar, Gujarat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
