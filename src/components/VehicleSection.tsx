import React from 'react';
import { ArrowRight, Check, Users } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface VehicleSectionProps {
  onSelectVehicle: (vehicleCategoryTitle: string) => void;
}

export const VehicleSection: React.FC<VehicleSectionProps> = ({ onSelectVehicle }) => {
  return (
    <section className="section section-bg-light" id="vehicles">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">VERSATILE FLEET CATEGORIES</div>
          <h2 className="section-title">Vehicles for Every Requirement</h2>
          <p className="section-subtitle">
            Tell us what you need — we'll help arrange a suitable vehicle for your journey.
          </p>
        </div>

        {/* Category-based Cards */}
        <div className="vehicles-grid">
          {BUSINESS_DATA.vehicleCategories.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              {/* Category Image Preview */}
              <div className="vehicle-card-img-wrap">
                <img
                  src={vehicle.image}
                  alt={`Royal Cab Service ${vehicle.title}`}
                  className="vehicle-card-img"
                  loading="lazy"
                />
                <span className="vehicle-badge">{vehicle.badge}</span>
              </div>

              {/* Body */}
              <div className="vehicle-card-body">
                <div>
                  <h3 className="vehicle-card-title">{vehicle.title}</h3>
                  <div className="vehicle-capacity">
                    <Users size={13} style={{ color: 'var(--gold-600)' }} />
                    <span>{vehicle.capacity}</span>
                  </div>

                  <p className="vehicle-card-desc">{vehicle.description}</p>

                  <ul className="vehicle-highlights">
                    {vehicle.highlights.map((h, i) => (
                      <li key={i}>
                        <Check size={14} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <button
                    onClick={() => onSelectVehicle(vehicle.title)}
                    className="btn btn-navy btn-sm"
                    style={{ width: '100%' }}
                    id={`vehicle-card-${vehicle.id}`}
                  >
                    <span>
                      {vehicle.id === 'customized-vehicle'
                        ? 'Discuss Requirement'
                        : 'Enquire for Vehicle'}
                    </span>
                    <ArrowRight size={14} style={{ color: 'var(--gold-400)' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
