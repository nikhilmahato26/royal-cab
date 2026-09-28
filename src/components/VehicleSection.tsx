import React from 'react';
import { Check, Star, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface VehicleSectionProps {
  onSelectVehicle: (vehicleName: string, rate?: string) => void;
}

export const VehicleSection: React.FC<VehicleSectionProps> = ({ onSelectVehicle }) => {
  return (
    <section className="section section-bg-light" id="vehicles">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={13} style={{ color: 'var(--gold-600)' }} />
            <span>TRANSPARENT RATES &amp; AVAILABILITY</span>
          </div>
          <h2 className="section-title">Vehicles for Every Requirement</h2>
          <p className="section-subtitle">
            Choose from our well-maintained fleet of Sedans, MPVs, SUVs, and Tempo Travellers at transparent per-kilometer rates for local and outstation travel.
          </p>
        </div>

        {/* 6 Exact Fleet Cards Matching Screenshot */}
        <div className="fleet-cards-grid">
          {BUSINESS_DATA.fleetVehicles.map((vehicle) => {
            const isPopular = Boolean(vehicle.isPopular);

            return (
              <div
                key={vehicle.id}
                className={`fleet-showcase-card ${isPopular ? 'popular-card' : ''}`}
              >
                {/* Most Popular Floating Badge */}
                {isPopular && (
                  <div className="fleet-popular-badge">
                    <Star size={13} fill="#0F172A" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Top Vehicle Image Box */}
                  <div className="fleet-card-img-box">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="fleet-card-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Emoji Icon */}
                  <div className="fleet-header-row">
                    <h3 className="fleet-car-name">{vehicle.name}</h3>
                    <span className="fleet-car-icon" aria-hidden="true">
                      {vehicle.iconEmoji}
                    </span>
                  </div>

                  {/* Category Tag & Rate */}
                  <div className="fleet-tag-price-row">
                    <span className="fleet-category-pill">
                      {vehicle.categoryTag}
                    </span>
                    <div className="fleet-price-wrap">
                      {vehicle.priceDisplay.startsWith('₹') ? (
                        <>
                          <span>₹{vehicle.pricePerKm}</span>
                          <span className="fleet-price-unit">/km</span>
                        </>
                      ) : (
                        <span style={{ fontSize: '1.05rem', color: 'var(--gold-700)', fontWeight: 700 }}>
                          {vehicle.priceDisplay}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Specification Badges / Pills */}
                  <div className="fleet-specs-pills">
                    {vehicle.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="fleet-spec-item">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* SUITABLE FOR Section */}
                  <div className="fleet-suitable-wrap">
                    <div className="fleet-suitable-heading">SUITABLE FOR</div>
                    <ul className="fleet-suitable-items">
                      {vehicle.suitableFor.map((item, iIdx) => (
                        <li key={iIdx} className="fleet-suitable-point">
                          <Check size={14} className="fleet-suitable-check" strokeWidth={3} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div style={{ marginTop: '14px' }}>
                  <button
                    onClick={() => onSelectVehicle(vehicle.name, vehicle.priceDisplay)}
                    className={isPopular ? 'btn-fleet-popular-action' : 'btn-fleet-action'}
                    id={`book-fleet-${vehicle.id}`}
                  >
                    <span>{vehicle.buttonText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
