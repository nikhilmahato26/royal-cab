import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  Car,
  MessageSquare,
  Sparkles,
  Calendar,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { INDIAN_REVIEWS_DATA, type IndianReview } from '../data/reviews';
import { createGeneralWhatsAppLink } from '../utils/communication';

interface TestimonialsSectionProps {
  onOpenBookingModal: () => void;
}

type FilterType = 'all' | 'jodhpur' | 'gandhinagar' | 'outstation';

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenBookingModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredReviews = INDIAN_REVIEWS_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'jodhpur') return item.hub === 'jodhpur';
    if (activeFilter === 'gandhinagar') return item.hub === 'gandhinagar';
    if (activeFilter === 'outstation') {
      return (
        item.tripType.toLowerCase().includes('outstation') ||
        item.tripType.toLowerCase().includes('pilgrimage') ||
        item.tripType.toLowerCase().includes('tour')
      );
    }
    return true;
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="section section-bg-light" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">TESTIMONIALS & PASSENGER EXPERIENCES</div>
          <h2 className="section-title">What Indian Travelers Say About Us</h2>
          <p className="section-subtitle">
            Authentic, verified reviews from families, business professionals, and tourists traveling across Rajasthan and Gujarat with Royal Cab Service.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="testimonials-summary-card">
          <div className="rating-score-block">
            <div className="rating-huge-number">4.9</div>
            <div className="rating-stars-wrap">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="gold-star-filled" />
                ))}
              </div>
              <span className="rating-score-label">480+ Verified Indian Reviews</span>
            </div>
          </div>

          <div className="rating-stat-divider" />

          <div className="rating-stat-pillars">
            <div className="stat-pillar">
              <span className="stat-pillar-val">99.4%</span>
              <span className="stat-pillar-text">On-Time Pickup Rate</span>
            </div>
            <div className="stat-pillar">
              <span className="stat-pillar-val">1,500+</span>
              <span className="stat-pillar-text">Trips Completed</span>
            </div>
            <div className="stat-pillar">
              <span className="stat-pillar-val">2 Hubs</span>
              <span className="stat-pillar-text">Jodhpur & Gandhinagar</span>
            </div>
            <div className="stat-pillar">
              <span className="stat-pillar-val">100%</span>
              <span className="stat-pillar-text">Transparent Billing</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="testimonials-filter-bar">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`testimonial-filter-pill ${
              activeFilter === 'all' ? 'active' : ''
            }`}
          >
            <span>All Reviews ({INDIAN_REVIEWS_DATA.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('jodhpur')}
            className={`testimonial-filter-pill ${
              activeFilter === 'jodhpur' ? 'active' : ''
            }`}
          >
            <MapPin size={14} />
            <span>Jodhpur & Rajasthan Hub</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('gandhinagar')}
            className={`testimonial-filter-pill ${
              activeFilter === 'gandhinagar' ? 'active' : ''
            }`}
          >
            <MapPin size={14} />
            <span>Gandhinagar & Gujarat Hub</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('outstation')}
            className={`testimonial-filter-pill ${
              activeFilter === 'outstation' ? 'active' : ''
            }`}
          >
            <Car size={14} />
            <span>Outstation & Pilgrimage</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-cards-grid">
          {filteredReviews.map((item: IndianReview) => (
            <div key={item.id} className="testimonial-card">
              {/* Decorative Quote Icon */}
              <div className="testimonial-quote-icon">
                <Quote size={28} />
              </div>

              {/* Card Header: Avatar & Info */}
              <div className="testimonial-card-header">
                <div className="testimonial-avatar">
                  {getInitials(item.name)}
                </div>

                <div className="testimonial-user-meta">
                  <div className="testimonial-user-name-row">
                    <h4>{item.name}</h4>
                    <span className="verified-badge-pill" title="Verified Ride with Royal Cab">
                      <UserCheck size={12} />
                      <span>Verified Rider</span>
                    </span>
                  </div>

                  <div className="testimonial-location-sub">
                    <MapPin size={12} style={{ color: 'var(--gold-600)' }} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating & Trip Tag */}
              <div className="testimonial-rating-row">
                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="gold-star-filled" />
                  ))}
                </div>
                <span className="testimonial-trip-tag">{item.badge}</span>
              </div>

              {/* Route & Vehicle Meta */}
              <div className="testimonial-route-box">
                <div className="route-item">
                  <span className="route-label">Route:</span>
                  <span className="route-val">{item.route}</span>
                </div>
                <div className="vehicle-item">
                  <Car size={13} style={{ color: 'var(--gold-600)' }} />
                  <span>{item.vehicle}</span>
                </div>
              </div>

              {/* Review Content */}
              <div className="testimonial-body">
                <h5 className="testimonial-review-title">"{item.title}"</h5>
                <p className="testimonial-review-text">"{item.review}"</p>
              </div>

              {/* Card Footer: Date & Driver Mention */}
              <div className="testimonial-card-footer">
                <div className="testimonial-date">
                  <Calendar size={13} />
                  <span>{item.date}</span>
                </div>

                {item.driverMention && (
                  <div className="testimonial-driver-mention">
                    <CheckCircle2 size={13} style={{ color: '#16A34A' }} />
                    <span>{item.driverMention}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Action Bar */}
        <div className="testimonials-cta-banner">
          <div className="testimonials-cta-text">
            <div className="testimonials-cta-eyebrow">
              <Sparkles size={15} style={{ color: 'var(--gold-400)' }} />
              <span>EXPERIENCE THE ROYAL STANDARD</span>
            </div>
            <h3>Ready for a Comfortable, Reliable Ride?</h3>
            <p>
              Join hundreds of happy passengers traveling smoothly across Jodhpur, Gandhinagar, and outstation destinations.
            </p>
          </div>

          <div className="testimonials-cta-buttons">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="btn btn-gold"
              id="testimonial-book-btn"
            >
              <span>Book Your Cab Now</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="testimonial-whatsapp-feedback-btn"
            >
              <MessageSquare size={16} />
              <span>Share Feedback on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
