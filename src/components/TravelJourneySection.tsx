import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface TravelJourneySectionProps {
  onStartJourney: () => void;
}

export const TravelJourneySection: React.FC<TravelJourneySectionProps> = ({ onStartJourney }) => {
  return (
    <section className="section section-bg-alt" id="journey">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">SEAMLESS STEP-BY-STEP PROCESS</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            From your initial travel requirement to enjoying the destination, we keep your journey smooth, transparent and convenient.
          </p>
        </div>

        {/* 6 Steps Grid with Flow Indicators */}
        <div className="journey-steps-wrap">
          {BUSINESS_DATA.journeySteps.map((item, index) => (
            <div key={item.step} className="journey-step-card">
              <div className="journey-step-number">
                <span>0{item.step}</span>
              </div>
              <h3 className="journey-step-title">{item.title}</h3>
              <p className="journey-step-desc">{item.description}</p>

              {index < BUSINESS_DATA.journeySteps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '16px',
                    color: 'var(--gold-400)',
                    opacity: 0.7,
                  }}
                >
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual Summary Flow Callout */}
        <div
          style={{
            marginTop: '44px',
            textAlign: 'center',
            background: 'var(--navy-gradient)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px 24px',
            color: '#FFFFFF',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--gold-300)',
              marginBottom: '10px',
            }}
          >
            Ready to organize your next trip?
          </p>
          <p style={{ color: '#E2E8F0', fontSize: '0.92rem', maxWidth: '580px', margin: '0 auto 24px auto' }}>
            Get in touch with Royal Cab Service for cab booking, vehicle rental, sightseeing or hotel assistance.
          </p>
          <button
            onClick={onStartJourney}
            className="btn btn-gold btn-lg"
            id="journey-start-cta"
          >
            <span>Start Your Booking Plan</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
