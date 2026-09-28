import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, MapPin, Users, Car, Navigation, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_DATA } from '../data/business';
import { createWhatsAppBookingLink, type BookingFormData } from '../utils/communication';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedVehicle?: string;
  preSelectedTripType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedVehicle,
  preSelectedTripType,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: '',
    dropLocation: '',
    travelDate: new Date().toISOString().split('T')[0],
    vehicleRequirement: preSelectedVehicle || 'Sedan',
    tripType: preSelectedTripType || 'Local',
    passengers: '1-4',
    name: '',
    phone: '',
    additionalRequirement: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preSelectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicleRequirement: preSelectedVehicle }));
    }
    if (preSelectedTripType) {
      setFormData((prev) => ({ ...prev, tripType: preSelectedTripType }));
    }
  }, [preSelectedVehicle, preSelectedTripType]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#0F2440', '#E5B842'],
      });
    } catch {
      // ignore
    }

    const waLink = createWhatsAppBookingLink(formData);
    window.open(waLink, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close booking modal"
          id="modal-close-btn"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle2 size={54} style={{ color: '#16A34A', margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.6rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
              Enquiry Formulated!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Your journey details have been directed to our WhatsApp enquiry desk. Our coordinators from Jodhpur or Gandhinagar will assist you shortly.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="btn btn-navy"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '22px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-600)',
                  marginBottom: '4px',
                }}
              >
                ROYAL CAB SERVICE
              </div>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--navy-900)' }}>
                Book a Cab &amp; Travel Enquiry
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Fill in your trip specifications; get quote and vehicle availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Pickup & Drop */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="m-pickup">
                    <MapPin size={13} style={{ color: 'var(--gold-600)' }} />
                    Pickup Location
                  </label>
                  <input
                    id="m-pickup"
                    name="pickupLocation"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Pickup address/city"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="m-drop">
                    <MapPin size={13} style={{ color: 'var(--navy-700)' }} />
                    Drop Location
                  </label>
                  <input
                    id="m-drop"
                    name="dropLocation"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Drop destination"
                    value={formData.dropLocation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Trip Type & Vehicle Preference */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="m-trip">
                    <Navigation size={13} style={{ color: 'var(--gold-600)' }} />
                    Trip Type
                  </label>
                  <select
                    id="m-trip"
                    name="tripType"
                    className="form-select"
                    value={formData.tripType}
                    onChange={handleChange}
                  >
                    {BUSINESS_DATA.tripTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="m-vehicle">
                    <Car size={13} style={{ color: 'var(--gold-600)' }} />
                    Vehicle Requirement
                  </label>
                  <select
                    id="m-vehicle"
                    name="vehicleRequirement"
                    className="form-select"
                    value={formData.vehicleRequirement}
                    onChange={handleChange}
                  >
                    {BUSINESS_DATA.vehicleCategories.map((v) => (
                      <option key={v.id} value={v.title}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Passengers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="m-date">
                    <Calendar size={13} style={{ color: 'var(--gold-600)' }} />
                    Travel Date
                  </label>
                  <input
                    id="m-date"
                    name="travelDate"
                    type="date"
                    required
                    className="form-input"
                    value={formData.travelDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="m-passengers">
                    <Users size={13} style={{ color: 'var(--gold-600)' }} />
                    Passengers
                  </label>
                  <select
                    id="m-passengers"
                    name="passengers"
                    className="form-select"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    <option value="1-2">1 to 2</option>
                    <option value="3-4">3 to 4</option>
                    <option value="5-7">5 to 7</option>
                    <option value="8-12">8 to 12</option>
                    <option value="13+">13+ Group</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="m-name">
                    Your Name
                  </label>
                  <input
                    id="m-name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="m-phone">
                    Your Mobile Number
                  </label>
                  <input
                    id="m-phone"
                    name="phone"
                    type="tel"
                    required
                    className="form-input"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="form-group">
                <label className="form-label" htmlFor="m-add">
                  <FileText size={13} style={{ color: 'var(--gold-600)' }} />
                  Sightseeing / Hotel / Custom Notes
                </label>
                <textarea
                  id="m-add"
                  name="additionalRequirement"
                  rows={2}
                  className="form-textarea"
                  placeholder="Need hotel booking assistance, specific stopovers, or return journey timing? Share here..."
                  value={formData.additionalRequirement}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-gold btn-lg"
                style={{ width: '100%', marginTop: '6px' }}
                id="modal-submit-btn"
              >
                <Send size={18} />
                <span>Submit &amp; Get Quote</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
