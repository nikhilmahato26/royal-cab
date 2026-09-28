import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { createGeneralWhatsAppLink } from '../utils/communication';

interface FloatingActionsProps {
  onOpenBookingModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="floating-actions" aria-label="Quick contact shortcuts">
        <a
          href={createGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn-whatsapp"
          title="Chat with Royal Cab on WhatsApp"
        >
          <MessageSquare size={26} />
        </a>

        <a
          href={`tel:${BUSINESS_DATA.phones.primary}`}
          className="floating-btn floating-btn-phone"
          title={`Call Royal Cab Desk: ${BUSINESS_DATA.phones.primaryDisplay}`}
        >
          <Phone size={24} />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="mobile-bottom-bar" aria-label="Mobile quick actions">
        <a
          href={`tel:${BUSINESS_DATA.phones.primary}`}
          className="btn btn-navy btn-sm"
          style={{ width: '100%', fontSize: '0.8rem', padding: '10px 8px' }}
        >
          <Phone size={14} style={{ color: 'var(--gold-400)' }} />
          <span>Call Desk</span>
        </a>

        <a
          href={createGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ width: '100%', fontSize: '0.8rem', padding: '10px 8px' }}
        >
          <MessageSquare size={14} />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBookingModal}
          className="btn btn-gold btn-sm"
          style={{ width: '100%', fontSize: '0.82rem', padding: '10px 8px' }}
        >
          <Calendar size={14} />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
};
