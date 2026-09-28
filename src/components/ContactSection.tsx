import React, { useState } from 'react';
import { Phone, Mail, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_DATA } from '../data/business';
import { createGeneralWhatsAppLink } from '../utils/communication';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceInterest: 'Cab Booking',
    message: '',
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
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#0F2440', '#38BDF8'],
      });
    } catch {
      // ignore
    }

    const messageText = `*ROYAL CAB SERVICE — DIRECT CONTACT ENQUIRY*\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Service Interest:* ${formData.serviceInterest}\n• *Message:* ${formData.message}`;
    const waUrl = `https://wa.me/91${BUSINESS_DATA.phones.primary}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section className="section section-bg-alt" id="contact">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">GET IN TOUCH</div>
          <h2 className="section-title">Contact Royal Cab Service</h2>
          <p className="section-subtitle">
            Have questions about vehicle options, outstation travel, sightseeing or hotel arrangements? Connect with our dedicated support desk today.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Phone Numbers & Email & Addresses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Direct Calling Cards */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                border: '1.5px solid var(--border-gold)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--navy-900)',
                  marginBottom: '16px',
                }}
              >
                Direct Phone Desks
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Phone 1 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                      Primary Contact Hotline
                    </div>
                    <a
                      href={`tel:${BUSINESS_DATA.phones.primary}`}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--navy-900)',
                      }}
                      id="contact-tel-primary"
                    >
                      {BUSINESS_DATA.phones.primaryDisplay}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_DATA.phones.primary}`}
                    className="btn btn-navy btn-sm"
                  >
                    <Phone size={13} style={{ color: 'var(--gold-400)' }} />
                    <span>Call</span>
                  </a>
                </div>

                {/* Phone 2 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                      Secondary Contact Hotline
                    </div>
                    <a
                      href={`tel:${BUSINESS_DATA.phones.secondary}`}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--navy-900)',
                      }}
                      id="contact-tel-secondary"
                    >
                      {BUSINESS_DATA.phones.secondaryDisplay}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_DATA.phones.secondary}`}
                    className="btn btn-navy btn-sm"
                  >
                    <Phone size={13} style={{ color: 'var(--gold-400)' }} />
                    <span>Call</span>
                  </a>
                </div>

                {/* Email Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                      Customer Enquiry Email
                    </div>
                    <a
                      href={`mailto:${BUSINESS_DATA.email}`}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: 'var(--navy-900)',
                        wordBreak: 'break-all',
                      }}
                      id="contact-email-link"
                    >
                      {BUSINESS_DATA.email}
                    </a>
                  </div>
                  <a
                    href={`mailto:${BUSINESS_DATA.email}`}
                    className="btn btn-outline-gold btn-sm"
                  >
                    <Mail size={13} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, #075E54 0%, #128C7E 100%)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '4px' }}>
                  Chat on WhatsApp
                </h4>
                <p style={{ color: '#E2E8F0', fontSize: '0.85rem', margin: 0 }}>
                  Instant replies for quotes, routes, and vehicle availability.
                </p>
              </div>
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm"
              >
                <MessageSquare size={16} />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Requirement Message Form */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 28px',
              border: '1.5px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--navy-900)',
                marginBottom: '6px',
              }}
            >
              Send an Enquiry
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
              Fill in your details and travel query; our desk will reach out promptly.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={42} style={{ color: '#16A34A', margin: '0 auto 14px auto' }} />
                <h4 style={{ fontSize: '1.25rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
                  Message Sent to WhatsApp!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
                  Thank you! You can also call us directly at {BUSINESS_DATA.phones.primaryDisplay}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-navy btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Your Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    className="form-input"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">
                    Primary Service of Interest
                  </label>
                  <select
                    id="contact-service"
                    name="serviceInterest"
                    className="form-select"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                  >
                    <option value="Cab Booking">Cab Booking (Local / Outstation)</option>
                    <option value="Vehicle Rental">Vehicle Rental</option>
                    <option value="Sightseeing">Sightseeing Transportation</option>
                    <option value="Hotel Booking">Hotel Booking Assistance</option>
                    <option value="Customized Travel">Customized Travel Requirement</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-msg">
                    Your Travel Requirements / Route Details
                  </label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    required
                    rows={3}
                    className="form-textarea"
                    placeholder="Please mention dates, passenger count, pickup and drop points..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold btn-lg"
                  style={{ width: '100%', marginTop: '6px' }}
                  id="contact-submit-btn"
                >
                  <Send size={18} />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
