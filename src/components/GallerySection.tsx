import React, { useState } from 'react';
import { MapPin, Eye, X, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface GallerySectionProps {
  onBookTrip: (tripName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookTrip }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Heritage Sightseeing',
    'City Sightseeing',
    'Hotels & Stays',
    'Outstation Routes',
  ];

  const filteredItems =
    activeFilter === 'All'
      ? BUSINESS_DATA.galleryItems
      : BUSINESS_DATA.galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="section section-bg-light" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={13} style={{ color: 'var(--gold-600)' }} />
            <span>AUTHENTIC TRAVEL GLIMPSES</span>
          </div>
          <h2 className="section-title">Our Fleet &amp; Travel Gallery</h2>
          <p className="section-subtitle">
            Authentic moments from our journeys across heritage palaces, city attractions, and outstation corridors in Jodhpur, Rajasthan &amp; Gujarat.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: isActive ? '1.5px solid var(--gold-500)' : '1px solid var(--border-light)',
                  background: isActive ? 'var(--navy-900)' : '#FFFFFF',
                  color: isActive ? 'var(--gold-400)' : 'var(--navy-900)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? 'var(--shadow-gold)' : 'var(--shadow-sm)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--gold-500)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  overflow: 'hidden',
                  background: 'var(--navy-950)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.45s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  loading="lazy"
                />

                {/* Category Pill on Image */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(11, 25, 44, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--gold-300)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(212, 175, 55, 0.35)',
                  }}
                >
                  {item.category}
                </div>

                {/* View Icon Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--navy-900)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  <Eye size={16} />
                </div>
              </div>

              {/* Caption Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'var(--gold-700)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--navy-900)',
                      marginBottom: '6px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.5, margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--navy-900)', fontWeight: 700, fontSize: '0.82rem' }}>
                  <span>View Details &amp; Plan Trip</span>
                  <ArrowRight size={14} style={{ color: 'var(--gold-600)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox Modal */}
        {currentLightboxItem && (
          <div
            className="modal-overlay"
            onClick={closeLightbox}
            style={{ zIndex: 3000 }}
            role="dialog"
            aria-modal="true"
          >
            <div
              style={{
                position: 'relative',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                maxWidth: '820px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '2px solid var(--gold-500)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="modal-close-btn"
                style={{ top: '14px', right: '14px', zIndex: 10 }}
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              {/* Large Image Preview with Navigation Controls */}
              <div
                style={{
                  position: 'relative',
                  maxHeight: '520px',
                  background: 'var(--navy-950)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  style={{
                    width: '100%',
                    maxHeight: '520px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(11, 25, 44, 0.75)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(11, 25, 44, 0.75)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Lightbox Details & Action */}
              <div style={{ padding: '24px 28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--gold-600)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      marginBottom: '4px',
                    }}
                  >
                    <MapPin size={14} />
                    <span>{currentLightboxItem.location}</span>
                    <span>•</span>
                    <span>{currentLightboxItem.category}</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)', marginBottom: '4px' }}>
                    {currentLightboxItem.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
                    {currentLightboxItem.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => {
                      closeLightbox();
                      onBookTrip(currentLightboxItem.title);
                    }}
                    className="btn btn-gold"
                  >
                    <span>Enquire for This Tour</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
