import React, { useState } from 'react';
import { Send, MapPin, Calendar, Users, Car, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_DATA } from '../data/business';
import { createWhatsAppBookingLink, type BookingFormData } from '../utils/communication';

interface VehicleRequirementCtaProps {
  onSuccess?: (data: BookingFormData) => void;
}

export const VehicleRequirementCta: React.FC<VehicleRequirementCtaProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    passengers: '1-4',
    pickupLocation: '',
    dropLocation: '',
    travelDate: new Date().toISOString().split('T')[0],
    vehicleRequirement: 'Sedan',
    tripType: 'Outstation',
    additionalRequirement: '',
  });

  const [submitted, setSubmitted] = useState(false);

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
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#0F2440', '#E5B842'],
      });
    } catch {
      // ignore
    }

    const waLink = createWhatsAppBookingLink({
      ...formData,
      tripType: 'Custom Vehicle Request',
    });
    window.open(waLink, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    if (onSuccess) {
      onSuccess(formData);
    }
  };

  return (
    <section className="section" style={{ paddingTop: '0px' }}>
      <div className="container">
        <div className="vehicle-cta-section">
          <div className="vehicle-cta-grid">
            {/* Left Column: Description & Highlights */}
            <div className="vehicle-cta-info">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--gold-300)',
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                }}
              >
                <span>Bespoke Vehicle Arrangements</span>
              </div>

              <h2>Need a Specific Vehicle?</h2>

              <p>
                Tell us your passenger count, travel route and requirements, and we'll help you with the appropriate vehicle option.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
                {[
                  'Sedan, SUV, Premium & Group vehicle options arranged',
                  'Flexible outstation & local trip configurations',
                  'Assistance with special luggage or group travel arrangements',
                  'Direct consultation with our Jodhpur & Gandhinagar desks',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.9rem',
                      color: '#E2E8F0',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="vehicle-cta-form-box">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.15)',
                      color: 'var(--gold-600)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
                    Requirement Received!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                    Your customized vehicle requirement has been formulated. You can also reach our desk directly at{' '}
                    <strong>{BUSINESS_DATA.phones.primaryDisplay}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline-gold btn-sm"
                  >
                    Send Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
                    {/* Passengers & Vehicle Preference */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="req-passengers">
                          <Users size={13} style={{ color: 'var(--gold-600)' }} />
                          Passengers
                        </label>
                        <select
                          id="req-passengers"
                          name="passengers"
                          className="form-select"
                          value={formData.passengers}
                          onChange={handleChange}
                        >
                          <option value="1-2">1 to 2</option>
                          <option value="3-4">3 to 4</option>
                          <option value="5-7">5 to 7</option>
                          <option value="8-12">8 to 12</option>
                          <option value="13+">13+ (Group)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="req-vehicle">
                          <Car size={13} style={{ color: 'var(--gold-600)' }} />
                          Vehicle Preference
                        </label>
                        <select
                          id="req-vehicle"
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

                    {/* Pickup & Destination */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="req-pickup">
                          <MapPin size={13} style={{ color: 'var(--gold-600)' }} />
                          Pickup Location
                        </label>
                        <input
                          id="req-pickup"
                          name="pickupLocation"
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. Jodhpur..."
                          value={formData.pickupLocation}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="req-drop">
                          <MapPin size={13} style={{ color: 'var(--navy-700)' }} />
                          Destination
                        </label>
                        <input
                          id="req-drop"
                          name="dropLocation"
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. Gandhinagar, Outstation..."
                          value={formData.dropLocation}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Travel Date */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="req-date">
                        <Calendar size={13} style={{ color: 'var(--gold-600)' }} />
                        Travel Date
                      </label>
                      <input
                        id="req-date"
                        name="travelDate"
                        type="date"
                        required
                        className="form-input"
                        value={formData.travelDate}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Additional Requirement */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="req-notes">
                        <FileText size={13} style={{ color: 'var(--gold-600)' }} />
                        Additional Requirement
                      </label>
                      <textarea
                        id="req-notes"
                        name="additionalRequirement"
                        rows={2}
                        className="form-textarea"
                        placeholder="Tell us about special luggage, specific hours, child seat, or route stops..."
                        value={formData.additionalRequirement}
                        onChange={handleChange}
                      />
                    </div>

                    {/* CTA Button */}
                    <button
                      type="submit"
                      className="btn btn-gold btn-lg"
                      style={{ width: '100%', marginTop: '4px' }}
                      id="request-vehicle-cta-btn"
                    >
                      <Send size={18} />
                      <span>Request Vehicle</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
