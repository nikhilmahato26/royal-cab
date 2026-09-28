import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { VehicleSection } from './components/VehicleSection';
import { VehicleRequirementCta } from './components/VehicleRequirementCta';
import { SightseeingSection } from './components/SightseeingSection';
import { HotelSection } from './components/HotelSection';
import { TravelJourneySection } from './components/TravelJourneySection';
import { LocationsSection } from './components/LocationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';
import type { BookingFormData } from './utils/communication';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>(undefined);
  const [selectedTripType, setSelectedTripType] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (vehicleCategory?: string, tripType?: string) => {
    setSelectedVehicle(vehicleCategory);
    setSelectedTripType(tripType);
    setIsModalOpen(true);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    let trip = 'Local';
    let vehicle = 'Sedan';

    if (serviceTitle.toLowerCase().includes('cab')) {
      trip = 'Local';
      vehicle = 'Sedan';
    } else if (serviceTitle.toLowerCase().includes('sightseeing')) {
      trip = 'Sightseeing';
      vehicle = 'SUV';
    } else if (serviceTitle.toLowerCase().includes('hotel')) {
      trip = 'Outstation';
    } else if (serviceTitle.toLowerCase().includes('rental')) {
      trip = 'Round Trip';
    } else if (serviceTitle.toLowerCase().includes('custom')) {
      trip = 'Other';
      vehicle = 'Customized Vehicle Requirement';
    }

    handleOpenBookingModal(vehicle, trip);
  };

  const handleEnquirySuccess = (details: BookingFormData) => {
    // Optional additional tracking or confirmation logic
    console.log('Enquiry formulated:', details);
  };

  return (
    <div className="royal-app-wrapper">
      {/* 1. Top Contact & Operating Locations Bar */}
      <TopBar />

      {/* 2. Sticky Responsive Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Main Content Sections */}
      <main>
        {/* 3. Hero Section with Integrated Booking/Enquiry Widget */}
        <Hero
          onOpenBookingModal={() => handleOpenBookingModal()}
          onEnquirySuccess={handleEnquirySuccess}
        />

        {/* 4. Four Key Trust Highlights */}
        <TrustStrip />

        {/* 5. About Section with Dual Hub Locations & Positioning */}
        <AboutSection onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 6. Five Premium Services */}
        <ServicesSection onSelectService={handleServiceSelect} />

        {/* 7. Category-based Vehicles Section */}
        <VehicleSection
          onSelectVehicle={(vehTitle) => handleOpenBookingModal(vehTitle)}
        />

        {/* 8. Large Interactive Specific Vehicle Requirement Section */}
        <VehicleRequirementCta onSuccess={handleEnquirySuccess} />

        {/* 9. Sightseeing Destinations Section */}
        <SightseeingSection
          onPlanSightseeing={(catTitle) =>
            handleOpenBookingModal('SUV', catTitle || 'Sightseeing')
          }
        />

        {/* 10. Dedicated Hotel Booking & Travel + Stay Section */}
        <HotelSection
          onEnquireHotel={(optTitle) =>
            handleOpenBookingModal('Sedan', optTitle || 'Outstation')
          }
        />

        {/* 11. Travel Journey - 6-Step Visual Process */}
        <TravelJourneySection onStartJourney={() => handleOpenBookingModal()} />

        {/* 12. Strategic Business Operating Locations (Jodhpur & Gandhinagar) */}
        <LocationsSection />

        {/* 13. Direct Contact, Phone Hotlines, Email & Enquiry Form */}
        <ContactSection />
      </main>

      {/* 14. Comprehensive Royal Navy & Gold Contrast Footer */}
      <Footer />

      {/* 15. Floating Action Buttons & Mobile Sticky Bottom Bar */}
      <FloatingActions onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* 16. Responsive Booking & Enquiry Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedVehicle={selectedVehicle}
        preSelectedTripType={selectedTripType}
      />
    </div>
  );
};

export default App;
