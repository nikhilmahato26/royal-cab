import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { BookingWidget } from './BookingWidget';
import type { BookingFormData } from '../utils/communication';

interface HeroProps {
  onOpenBookingModal: (preselectedVehicle?: string, tripType?: string) => void;
  onEnquirySuccess?: (details: BookingFormData) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onEnquirySuccess }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Brand, Headings, Value & CTAs */}
          <div className="hero-content">
            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <Sparkles size={14} style={{ color: 'var(--gold-600)' }} />
              <span>{BUSINESS_DATA.name.toUpperCase()}</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              Your Journey, <br />
              <span style={{ color: 'var(--gold-600)', fontStyle: 'italic' }}>
                Our Responsibility.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="hero-subtitle">
              {BUSINESS_DATA.heroSupportingText}
            </p>

            {/* Three CTAs as required */}
            <div className="hero-ctas">
              {/* Primary CTA */}
              <button
                onClick={() => onOpenBookingModal()}
                className="btn btn-gold btn-lg"
                id="hero-book-btn"
              >
                <Calendar size={18} />
                <span>Book a Cab</span>
              </button>

              {/* Secondary CTA */}
              <a
                href="#vehicles"
                className="btn btn-navy btn-lg"
                id="hero-explore-btn"
              >
                <span>Explore Vehicles</span>
                <ArrowRight size={18} style={{ color: 'var(--gold-400)' }} />
              </a>

              {/* Additional CTA */}
              <a
                href={`tel:${BUSINESS_DATA.phones.primary}`}
                className="btn btn-phone btn-lg"
                id="hero-call-btn"
              >
                <Phone size={18} style={{ color: 'var(--gold-600)' }} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Dual Location Trust Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 18px',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 600,
                  color: 'var(--navy-900)',
                }}
              >
                <MapPin size={15} style={{ color: 'var(--gold-600)' }} />
                <span>Operating from Jodhpur &amp; Gandhinagar</span>
              </div>
              <span style={{ opacity: 0.4 }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={15} style={{ color: '#16A34A' }} />
                <span>Transportation + Travel Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Booking / Enquiry Widget */}
          <div className="hero-widget-col">
            <BookingWidget onSuccessEnquiry={onEnquirySuccess} />
          </div>
        </div>

        {/* Scenic Road Banner Visual */}
        <div style={{ marginTop: '48px' }}>
          <div className="hero-image-wrap">
            <img
              src="/images/hero-travel.jpg"
              alt="Royal Cab Service premium vehicle traveling on a scenic Indian highway"
              className="hero-image"
              loading="eager"
            />
            <div className="hero-image-badge">
              <h4>Complete Travel &amp; Vehicle Solution</h4>
              <p>Sedans • SUVs • Premium Vehicles • Group Vehicles • Sightseeing &amp; Hotel Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
