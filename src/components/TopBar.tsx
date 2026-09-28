import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        {/* Hub locations */}
        <div className="top-bar-locations">
          <span>
            <MapPin size={13} style={{ color: 'var(--gold-400)' }} />
            Primary Hub: <strong>Jodhpur (Rajasthan)</strong>
          </span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span>
            <MapPin size={13} style={{ color: 'var(--gold-400)' }} />
            Branch Hub: <strong>Gandhinagar (Gujarat)</strong>
          </span>
        </div>

        {/* Contact Numbers and Email */}
        <div className="top-bar-contacts">
          <a
            href={`tel:${BUSINESS_DATA.phones.primary}`}
            className="top-bar-link"
            title="Call Primary Number"
          >
            <Phone size={13} style={{ color: 'var(--gold-400)' }} />
            <span>{BUSINESS_DATA.phones.primaryDisplay}</span>
          </a>

          <a
            href={`tel:${BUSINESS_DATA.phones.secondary}`}
            className="top-bar-link"
            title="Call Secondary Number"
          >
            <Phone size={13} style={{ color: 'var(--gold-400)' }} />
            <span>{BUSINESS_DATA.phones.secondaryDisplay}</span>
          </a>

          <a
            href={`mailto:${BUSINESS_DATA.email}`}
            className="top-bar-link"
            title="Send an Email Enquiry"
            style={{ display: 'none' }}
          >
            <Mail size={13} style={{ color: 'var(--gold-400)' }} />
            <span>{BUSINESS_DATA.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
