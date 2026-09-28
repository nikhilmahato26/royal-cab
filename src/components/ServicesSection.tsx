import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="section section-bg-alt" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">COMPREHENSIVE TRAVEL SOLUTIONS</div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From flexible vehicle rentals to outstation journeys and hotel booking assistance, discover tailored solutions for every stage of your trip.
          </p>
        </div>

        {/* 5 Service Cards */}
        <div className="services-grid">
          {BUSINESS_DATA.services.map((service) => (
            <div key={service.id} className="service-card">
              <div>
                <div className="service-number">{service.number}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={15} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="btn btn-outline-gold btn-sm"
                  style={{ width: '100%' }}
                  id={`service-cta-${service.id}`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
