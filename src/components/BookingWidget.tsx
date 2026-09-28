import React, { useState } from 'react';
import { MapPin, Calendar as CalendarIcon, Car, Users, Navigation, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_DATA } from '../data/business';
import { createWhatsAppBookingLink, type BookingFormData } from '../utils/communication';

interface BookingWidgetProps {
  onSuccessEnquiry?: (details: BookingFormData) => void;
  className?: string;
  defaultVehicle?: string;
  defaultTripType?: string;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  onSuccessEnquiry,
  className = '',
  defaultVehicle = '',
  defaultTripType = 'Local',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: '',
    dropLocation: '',
    travelDate: new Date().toISOString().split('T')[0],
    vehicleRequirement: defaultVehicle || 'Sedan',
    tripType: defaultTripType || 'Local',
    passengers: '1-4',
    additionalRequirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#0F2440', '#E5B842', '#38BDF8'],
      });
    } catch {
      // Ignore if confetti fails
    }

    // Open WhatsApp with pre-filled enquiry
    const waLink = createWhatsAppBookingLink(formData);
    window.open(waLink, '_blank', 'noopener,noreferrer');

    if (onSuccessEnquiry) {
      onSuccessEnquiry(formData);
    }

    setIsSubmitting(false);
  };

  return (
    <div className={`booking-widget-card ${className}`} id="booking-widget">
      <div className="booking-widget-header">
        <h3 className="booking-widget-title">
          <Navigation size={22} style={{ color: 'var(--gold-600)' }} />
          Plan Your Journey
        </h3>
        <span className="booking-widget-badge">Instant Quote Enquiry</span>
      </div>

      <form onSubmit={handleSubmit} className="booking-form-grid">
        {/* Pickup Location */}
        <div className="form-group">
          <label className="form-label" htmlFor="pickupLocation">
            <MapPin size={14} style={{ color: 'var(--gold-600)' }} />
            Pickup Location
          </label>
          <input
            id="pickupLocation"
            name="pickupLocation"
            type="text"
            required
            className="form-input"
            placeholder="e.g. Jodhpur, Gandhinagar, Airport..."
            value={formData.pickupLocation}
            onChange={handleChange}
          />
        </div>

        {/* Drop Location */}
        <div className="form-group">
          <label className="form-label" htmlFor="dropLocation">
            <MapPin size={14} style={{ color: 'var(--navy-700)' }} />
            Drop Location
          </label>
          <input
            id="dropLocation"
            name="dropLocation"
            type="text"
            required
            className="form-input"
            placeholder="e.g. City Center, Outstation destination..."
            value={formData.dropLocation}
            onChange={handleChange}
          />
        </div>

        {/* Travel Date */}
        <div className="form-group">
          <label className="form-label" htmlFor="travelDate">
            <CalendarIcon size={14} style={{ color: 'var(--gold-600)' }} />
            Travel Date
          </label>
          <input
            id="travelDate"
            name="travelDate"
            type="date"
            required
            className="form-input"
            value={formData.travelDate}
            onChange={handleChange}
          />
        </div>

        {/* Vehicle Requirement */}
        <div className="form-group">
          <label className="form-label" htmlFor="vehicleRequirement">
            <Car size={14} style={{ color: 'var(--gold-600)' }} />
            Vehicle Requirement
          </label>
          <select
            id="vehicleRequirement"
            name="vehicleRequirement"
            className="form-select"
            value={formData.vehicleRequirement}
            onChange={handleChange}
          >
            {BUSINESS_DATA.vehicleCategories.map((v) => (
              <option key={v.id} value={v.title}>
                {v.title} ({v.capacity})
              </option>
            ))}
          </select>
        </div>

        {/* Trip Type */}
        <div className="form-group">
          <label className="form-label" htmlFor="tripType">
            <Navigation size={14} style={{ color: 'var(--gold-600)' }} />
            Trip Type
          </label>
          <select
            id="tripType"
            name="tripType"
            className="form-select"
            value={formData.tripType}
            onChange={handleChange}
          >
            {BUSINESS_DATA.tripTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Passengers */}
        <div className="form-group">
          <label className="form-label" htmlFor="passengers">
            <Users size={14} style={{ color: 'var(--gold-600)' }} />
            Number of Passengers
          </label>
          <select
            id="passengers"
            name="passengers"
            className="form-select"
            value={formData.passengers}
            onChange={handleChange}
          >
            <option value="1-2">1 to 2 Passengers</option>
            <option value="3-4">3 to 4 Passengers</option>
            <option value="5-7">5 to 7 Passengers</option>
            <option value="8-12">8 to 12 Passengers</option>
            <option value="13+">13+ Passengers (Group)</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="form-group full-width" style={{ marginTop: '8px' }}>
          <button
            type="submit"
            className="btn btn-gold btn-lg"
            style={{ width: '100%' }}
            disabled={isSubmitting}
            id="widget-submit-btn"
          >
            <Send size={18} />
            <span>Get a Quote</span>
          </button>
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-subtle)',
              textAlign: 'center',
              marginTop: '6px',
            }}
          >
            * Enquiry assistance via direct WhatsApp &amp; Call confirmation. No online payment required.
          </p>
        </div>
      </form>
    </div>
  );
};
