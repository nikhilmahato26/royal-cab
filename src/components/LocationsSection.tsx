import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Navigation,
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { LOCATION_REVIEWS_SUMMARY, type IndianReview } from '../data/reviews';

interface LocationsSectionProps {
  onOpenBookingModal?: (tripCity?: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenBookingModal }) => {
  const [jodhpurReviewIdx, setJodhpurReviewIdx] = useState(0);
  const [gandhinagarReviewIdx, setGandhinagarReviewIdx] = useState(0);

  const jodhpurReviews = LOCATION_REVIEWS_SUMMARY.jodhpur.featuredReviews;
  const gandhinagarReviews = LOCATION_REVIEWS_SUMMARY.gandhinagar.featuredReviews;

  const currentJodReview: IndianReview = jodhpurReviews[jodhpurReviewIdx];
  const currentGanReview: IndianReview = gandhinagarReviews[gandhinagarReviewIdx];

  const nextJodReview = () => {
    setJodhpurReviewIdx((prev) => (prev + 1) % jodhpurReviews.length);
  };

  const prevJodReview = () => {
    setJodhpurReviewIdx((prev) => (prev - 1 + jodhpurReviews.length) % jodhpurReviews.length);
  };

  const nextGanReview = () => {
    setGandhinagarReviewIdx((prev) => (prev + 1) % gandhinagarReviews.length);
  };

  const prevGanReview = () => {
    setGandhinagarReviewIdx((prev) => (prev - 1 + gandhinagarReviews.length) % gandhinagarReviews.length);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="section section-bg-light" id="locations">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">STRATEGIC OPERATING BASES & LOCAL REVIEWS</div>
          <h2 className="section-title">Our Business Locations & Local Customer Reviews</h2>
          <p className="section-subtitle">
            Royal Cab Service proudly operates from two key regions in Rajasthan and Gujarat. Read what local patrons and tourists at each hub say about our service.
          </p>
        </div>

        {/* Dual Location Cards */}
        <div className="locations-showcase-grid">
          {/* 1. Primary Hub: Jodhpur, Rajasthan */}
          <div className="location-full-card">
            <div>
              {/* Badge & Rating Header */}
              <div className="location-top-bar">
                <div className="location-badge-tag">
                  <MapPin size={13} />
                  <span>Primary Operating Location</span>
                </div>

                <div className="location-rating-badge" title="Verified Google Reviews in Jodhpur">
                  <div className="stars-mini">
                    <Star size={13} className="gold-star-filled" />
                  </div>
                  <span>4.9 / 5.0 (284+ Reviews)</span>
                </div>
              </div>

              <h3>Jodhpur, Rajasthan</h3>

              {/* Address Box */}
              <div className="location-address-box">
                <p style={{ fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Royal Cab Service – Jodhpur Desk
                </p>
                {BUSINESS_DATA.locations.jodhpur.addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>

              {/* Contact Hotline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Primary Contact Hotline (Jodhpur Desk):
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

              {/* Jodhpur Customer Reviews Spotlight Box */}
              <div className="location-reviews-panel">
                <div className="location-reviews-panel-header">
                  <div className="location-reviews-panel-title">
                    <Sparkles size={14} style={{ color: 'var(--gold-600)' }} />
                    <span>Indian Reviews at Jodhpur Hub</span>
                  </div>
                  <div className="location-reviews-arrows">
                    <button
                      type="button"
                      onClick={prevJodReview}
                      className="loc-rev-arrow-btn"
                      aria-label="Previous Jodhpur Review"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="loc-rev-counter">
                      {jodhpurReviewIdx + 1}/{jodhpurReviews.length}
                    </span>
                    <button
                      type="button"
                      onClick={nextJodReview}
                      className="loc-rev-arrow-btn"
                      aria-label="Next Jodhpur Review"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="location-review-card">
                  <div className="loc-rev-header-row">
                    <div className="loc-rev-avatar">
                      {getInitials(currentJodReview.name)}
                    </div>
                    <div className="loc-rev-meta">
                      <div className="loc-rev-name">{currentJodReview.name}</div>
                      <div className="loc-rev-loc">{currentJodReview.location}</div>
                    </div>
                    <div className="loc-rev-rating">
                      {[...Array(currentJodReview.rating)].map((_, i) => (
                        <Star key={i} size={12} className="gold-star-filled" />
                      ))}
                    </div>
                  </div>

                  <div className="loc-rev-trip-tag">
                    <span>{currentJodReview.route}</span>
                  </div>

                  <p className="loc-rev-text">
                    <Quote size={12} style={{ display: 'inline', marginRight: '4px', opacity: 0.6 }} />
                    {currentJodReview.review}
                  </p>

                  <div className="loc-rev-footer">
                    <span className="loc-rev-badge">
                      <CheckCircle2 size={11} style={{ color: '#16A34A' }} />
                      <span>Verified Rider</span>
                    </span>
                    <span className="loc-rev-date">{currentJodReview.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
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
                  <span>Directions</span>
                </a>
              </div>

              {onOpenBookingModal && (
                <button
                  type="button"
                  onClick={() => onOpenBookingModal('Jodhpur')}
                  className="btn btn-gold btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>Book Cab from Jodhpur</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* 2. Second Hub: Gandhinagar, Gujarat */}
          <div className="location-full-card">
            <div>
              {/* Badge & Rating Header */}
              <div className="location-top-bar">
                <div className="location-badge-tag">
                  <MapPin size={13} />
                  <span>Second Operating Location</span>
                </div>

                <div className="location-rating-badge" title="Verified Google Reviews in Gandhinagar">
                  <div className="stars-mini">
                    <Star size={13} className="gold-star-filled" />
                  </div>
                  <span>4.8 / 5.0 (196+ Reviews)</span>
                </div>
              </div>

              <h3>Gandhinagar, Gujarat</h3>

              {/* Address Box */}
              <div className="location-address-box">
                <p style={{ fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Royal Cab Service – Gandhinagar Desk
                </p>
                {BUSINESS_DATA.locations.gandhinagar.addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>

              {/* Contact Hotline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Branch Contact Hotline (Gandhinagar Desk):
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

              {/* Gandhinagar Customer Reviews Spotlight Box */}
              <div className="location-reviews-panel">
                <div className="location-reviews-panel-header">
                  <div className="location-reviews-panel-title">
                    <Sparkles size={14} style={{ color: 'var(--gold-600)' }} />
                    <span>Indian Reviews at Gandhinagar Hub</span>
                  </div>
                  <div className="location-reviews-arrows">
                    <button
                      type="button"
                      onClick={prevGanReview}
                      className="loc-rev-arrow-btn"
                      aria-label="Previous Gandhinagar Review"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="loc-rev-counter">
                      {gandhinagarReviewIdx + 1}/{gandhinagarReviews.length}
                    </span>
                    <button
                      type="button"
                      onClick={nextGanReview}
                      className="loc-rev-arrow-btn"
                      aria-label="Next Gandhinagar Review"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="location-review-card">
                  <div className="loc-rev-header-row">
                    <div className="loc-rev-avatar">
                      {getInitials(currentGanReview.name)}
                    </div>
                    <div className="loc-rev-meta">
                      <div className="loc-rev-name">{currentGanReview.name}</div>
                      <div className="loc-rev-loc">{currentGanReview.location}</div>
                    </div>
                    <div className="loc-rev-rating">
                      {[...Array(currentGanReview.rating)].map((_, i) => (
                        <Star key={i} size={12} className="gold-star-filled" />
                      ))}
                    </div>
                  </div>

                  <div className="loc-rev-trip-tag">
                    <span>{currentGanReview.route}</span>
                  </div>

                  <p className="loc-rev-text">
                    <Quote size={12} style={{ display: 'inline', marginRight: '4px', opacity: 0.6 }} />
                    {currentGanReview.review}
                  </p>

                  <div className="loc-rev-footer">
                    <span className="loc-rev-badge">
                      <CheckCircle2 size={11} style={{ color: '#16A34A' }} />
                      <span>Verified Rider</span>
                    </span>
                    <span className="loc-rev-date">{currentGanReview.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
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
                  <span>Directions</span>
                </a>
              </div>

              {onOpenBookingModal && (
                <button
                  type="button"
                  onClick={() => onOpenBookingModal('Gandhinagar')}
                  className="btn btn-gold btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>Book Cab from Gandhinagar</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
