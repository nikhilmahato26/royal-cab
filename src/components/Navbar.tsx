import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { createGeneralWhatsAppLink } from '../utils/communication';

interface NavbarProps {
  onOpenBookingModal: (preselectedVehicle?: string, tripType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Sightseeing', href: '#sightseeing' },
    { label: 'Hotel Booking', href: '#hotels' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo / Brand */}
        <a href="#home" className="nav-brand" aria-label="Royal Cab Service Home">
          <img
            src="/images/branding/royal-logo.svg"
            alt="Royal Cab Service Logo"
            className="nav-brand-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Actions */}
        <div className="nav-actions">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${BUSINESS_DATA.phones.primary}`}
            className="btn btn-phone btn-sm"
            style={{ display: 'none' }}
            id="nav-call-btn"
          >
            <Phone size={14} style={{ color: 'var(--gold-600)' }} />
            <span>{BUSINESS_DATA.phones.primary}</span>
          </a>

          {/* Primary CTA Book Now */}
          <button
            onClick={() => onOpenBookingModal()}
            className="btn btn-gold btn-sm"
            id="nav-book-btn"
          >
            <Calendar size={15} />
            <span>Book Now</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-toggle-btn"
            aria-label="Toggle navigation menu"
            id="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="btn btn-gold"
              style={{ width: '100%' }}
            >
              <Calendar size={18} />
              <span>Book Now</span>
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <a
                href={`tel:${BUSINESS_DATA.phones.primary}`}
                className="btn btn-navy btn-sm"
                style={{ width: '100%' }}
              >
                <Phone size={14} style={{ color: 'var(--gold-400)' }} />
                <span>Call Us</span>
              </a>

              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ width: '100%' }}
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
