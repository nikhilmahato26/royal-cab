import React, { useState, useRef } from 'react';
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Film,
  Camera,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface AboutSectionProps {
  onOpenBookingModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeMedia, setActiveMedia] = useState<'video' | 'photo'>('video');
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="section section-bg-light" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Interactive Video Showcase / Photo Toggle */}
          <div className="about-image-col">
            <div className="about-media-wrapper">
              {/* Media Switcher Tabs */}
              <div className="about-media-tabs">
                <button
                  type="button"
                  onClick={() => setActiveMedia('video')}
                  className={`about-media-tab-btn ${
                    activeMedia === 'video' ? 'active' : ''
                  }`}
                  aria-label="View Fleet Video"
                >
                  <Film size={14} />
                  <span>Fleet in Action</span>
                  <span className="live-dot-pulse" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMedia('photo')}
                  className={`about-media-tab-btn ${
                    activeMedia === 'photo' ? 'active' : ''
                  }`}
                  aria-label="View Heritage Fleet Photo"
                >
                  <Camera size={14} />
                  <span>Palace Fleet</span>
                </button>
              </div>

              {/* Main Media Display */}
              {activeMedia === 'video' ? (
                <div className="about-video-container">
                  {/* Status Overlay Badge */}
                  <div className="about-video-top-badge">
                    <span className="about-video-pulse-dot" />
                    <span>Royal Cab Fleet • On-Road Video</span>
                  </div>

                  {/* HTML5 Video Player */}
                  <video
                    ref={videoRef}
                    src={
                      BUSINESS_DATA.aboutVideoUrl ||
                      'https://res.cloudinary.com/dynbpb9u0/video/upload/v1790662379/WhatsApp_Video_2026-09-29_at_10.52.46_vxosrv.mp4'
                    }
                    className="about-video-element"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClick={togglePlay}
                    aria-label="Royal Cab Service Fleet in Action video"
                  />

                  {/* Custom Controls Bar */}
                  <div className="about-video-controls-overlay">
                    <div className="about-video-controls-left">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="about-video-ctrl-btn"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        title={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause size={17} /> : <Play size={17} style={{ marginLeft: '2px' }} />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className={`about-video-ctrl-btn ${isMuted ? 'muted-btn' : 'unmuted-btn'}`}
                        aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                        title={isMuted ? 'Unmute sound' : 'Mute sound'}
                      >
                        {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                        <span className="about-video-audio-hint">
                          {isMuted ? 'Tap for audio' : 'Sound on'}
                        </span>
                      </button>
                    </div>

                    <div className="about-video-caption-tag">
                      <span>Jodhpur • Gandhinagar</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="about-image-wrap">
                  <img
                    src="/images/gallery/gallery-heritage-palace.jpg"
                    alt="Royal Cab Service vehicle at Rajasthan heritage palace in Jodhpur"
                    className="about-image"
                    loading="lazy"
                  />
                  <div className="about-image-caption">
                    <Sparkles size={14} style={{ color: 'var(--gold-400)' }} />
                    <span>Rajasthan Heritage Palace Tour & Outstation Cab</span>
                  </div>
                </div>
              )}

              {/* Bottom Quick Feature Highlights */}
              <div className="about-media-footer-strip">
                <div className="about-media-footer-pill">
                  <CheckCircle2 size={13} style={{ color: 'var(--gold-500)' }} />
                  <span>Sanitized & Verified Fleet</span>
                </div>
                <div className="about-media-footer-pill">
                  <CheckCircle2 size={13} style={{ color: 'var(--gold-500)' }} />
                  <span>Experienced Chauffeurs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="about-content">
            <div className="section-eyebrow" style={{ alignSelf: 'flex-start' }}>
              ABOUT ROYAL CAB SERVICE
            </div>

            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Travel Made Simple
            </h2>

            <p className="about-lead">
              Royal Cab Service provides transportation and travel-related services including cab booking, vehicle rental, sightseeing transportation and hotel booking assistance. Whether you need a vehicle for local travel, an outstation journey, sightseeing or a customized travel requirement, Royal Cab Service can help arrange the right solution for your trip.
            </p>

            {/* Positioning Callout */}
            <div
              style={{
                background: 'var(--bg-accent-light)',
                borderLeft: '4px solid var(--gold-500)',
                padding: '16px 20px',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--navy-900)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '4px',
                }}
              >
                {BUSINESS_DATA.tagline}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                {BUSINESS_DATA.supportingMessage}
              </p>
            </div>

            {/* Operating Hubs - Jodhpur & Gandhinagar */}
            <div className="about-locations-box">
              <div className="about-locations-header">
                <MapPin size={16} style={{ color: 'var(--gold-600)' }} />
                <span>Operating Hub Locations</span>
              </div>

              <div className="location-cards-grid">
                {/* Jodhpur Hub */}
                <div className="location-mini-card">
                  <h4>
                    <span>Jodhpur</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-700)' }}>
                      (Rajasthan)
                    </span>
                  </h4>
                  <p>{BUSINESS_DATA.locations.jodhpur.fullAddress}</p>
                  <a
                    href={`tel:${BUSINESS_DATA.phones.primary}`}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--navy-900)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Connect Jodhpur</span>
                    <ArrowRight size={13} style={{ color: 'var(--gold-600)' }} />
                  </a>
                </div>

                {/* Gandhinagar Hub */}
                <div className="location-mini-card">
                  <h4>
                    <span>Gandhinagar</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-700)' }}>
                      (Gujarat)
                    </span>
                  </h4>
                  <p>{BUSINESS_DATA.locations.gandhinagar.fullAddress}</p>
                  <a
                    href={`tel:${BUSINESS_DATA.phones.secondary}`}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--navy-900)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Connect Gandhinagar</span>
                    <ArrowRight size={13} style={{ color: 'var(--gold-600)' }} />
                  </a>
                </div>
              </div>
            </div>

            {/* Key Service Highlights Checkmarks */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
                marginTop: '6px',
              }}
            >
              {[
                'Local & Outstation Cab Booking',
                'Flexible Vehicle Rental Solutions',
                'Curated Sightseeing Transport',
                'Coordinated Hotel Booking Support',
              ].map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.85rem',
                    color: 'var(--navy-900)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--gold-600)' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={onOpenBookingModal}
                className="btn btn-gold"
                id="about-discuss-btn"
              >
                <span>Discuss Your Travel Requirement</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
