export interface BusinessLocation {
  label: string;
  state: string;
  city: string;
  pincode: string;
  addressLines: string[];
  fullAddress: string;
  mapQuery: string;
}

export interface BusinessData {
  name: string;
  shortName: string;
  tagline: string;
  supportingMessage: string;
  heroHeading: string;
  heroSupportingText: string;
  phones: {
    primary: string;
    secondary: string;
    primaryDisplay: string;
    secondaryDisplay: string;
  };
  email: string;
  aboutVideoUrl?: string;
  locations: {
    jodhpur: BusinessLocation;
    gandhinagar: BusinessLocation;
  };
  tripTypes: string[];
  vehicleCategories: {
    id: string;
    title: string;
    description: string;
    image: string;
    badge: string;
    highlights: string[];
    capacity: string;
  }[];
  services: {
    number: string;
    id: string;
    title: string;
    description: string;
    ctaText: string;
    icon: string;
    features: string[];
  }[];
  sightseeingCategories: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  hotelOptions: {
    id: string;
    title: string;
    description: string;
    image: string;
    badge: string;
    features: string[];
  }[];
  journeySteps: {
    step: number;
    title: string;
    description: string;
  }[];
  trustHighlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  galleryItems: {
    id: string;
    title: string;
    category: string;
    location: string;
    image: string;
    description: string;
  }[];
  fleetVehicles: {
    id: string;
    name: string;
    categoryTag: string;
    pricePerKm: string;
    priceDisplay: string;
    iconEmoji: string;
    image: string;
    isPopular?: boolean;
    specs: string[];
    suitableFor: string[];
    buttonText: string;
  }[];
}

export const BUSINESS_DATA: BusinessData = {
  name: 'Royal Cab Service',
  shortName: 'Royal Cab',
  tagline: 'Your Travel. Your Vehicle. Your Journey.',
  supportingMessage:
    'From cab bookings and vehicle rentals to sightseeing and hotel arrangements, Royal Cab Service helps make your journey simple and convenient.',
  heroHeading: 'Your Journey, Our Responsibility.',
  heroSupportingText:
    'Reliable cab booking, vehicle rental, sightseeing and travel services tailored to your journey.',
  phones: {
    primary: '9784693809',
    secondary: '8279256012',
    primaryDisplay: '+91 97846 93809',
    secondaryDisplay: '+91 82792 56012',
  },
  email: 'Balajistore1243@gmail.com',
  aboutVideoUrl:
    'https://res.cloudinary.com/dynbpb9u0/video/upload/v1790662379/WhatsApp_Video_2026-09-29_at_10.52.46_vxosrv.mp4',
  locations: {
    jodhpur: {
      label: 'Primary Operating Location (Rajasthan)',
      city: 'Jodhpur',
      state: 'Rajasthan',
      pincode: '342015',
      addressLines: [
        'Shop No. 03, Balaji School Uniform and Collection',
        'Near Borana Dairy, Opposite Army Public School',
        'BJS Banar Road, Jodhpur, Rajasthan – 342015',
      ],
      fullAddress:
        'Shop No. 03, Balaji School Uniform and Collection, Near Borana Dairy, Opposite Army Public School, BJS Banar Road, Jodhpur, Rajasthan – 342015',
      mapQuery:
        'Balaji School Uniform and Collection, Opposite Army Public School, BJS Banar Road, Jodhpur, Rajasthan 342015',
    },
    gandhinagar: {
      label: 'Second Operating Location (Gujarat)',
      city: 'Gandhinagar',
      state: 'Gujarat',
      pincode: '382355',
      addressLines: [
        'JK Farm House Road',
        'Dadunagar, Dabhoda',
        'Gandhinagar, Gujarat – 382355',
      ],
      fullAddress:
        'JK Farm House Road, Dadunagar, Dabhoda, Gandhinagar, Gujarat – 382355',
      mapQuery: 'Dadunagar, Dabhoda, Gandhinagar, Gujarat 382355',
    },
  },
  tripTypes: [
    'Local',
    'Outstation',
    'One Way',
    'Round Trip',
    'Sightseeing',
    'Airport Transfer',
    'Other',
  ],
  trustHighlights: [
    {
      title: 'All Vehicle Requirements',
      description: 'Vehicle options based on customer requirements.',
      icon: 'Car',
    },
    {
      title: 'Cab Booking',
      description: 'Convenient cab booking for different travel needs.',
      icon: 'Compass',
    },
    {
      title: 'Sightseeing',
      description: 'Transportation for sightseeing and travel experiences.',
      icon: 'Camera',
    },
    {
      title: 'Hotel Booking',
      description: 'Hotel booking assistance for travel requirements.',
      icon: 'Hotel',
    },
  ],
  services: [
    {
      number: '01',
      id: 'cab-booking',
      title: 'Cab Booking',
      description:
        'Book a cab for your local, outstation or customized travel requirements.',
      ctaText: 'Book a Cab',
      icon: 'Car',
      features: [
        'City & local point-to-point travel',
        'Comfortable outstation journeys',
        'One-way & round-trip transfers',
        'Flexible custom timings',
      ],
    },
    {
      number: '02',
      id: 'vehicle-rental',
      title: 'Vehicle Rental',
      description:
        'Vehicle rental solutions for different travel requirements and trip types.',
      ctaText: 'Enquire for Vehicle',
      icon: 'Key',
      features: [
        'Multiple vehicle categories available',
        'Tailored rental packages',
        'Short-term & multi-day journeys',
        'Punctual & verified service',
      ],
    },
    {
      number: '03',
      id: 'sightseeing',
      title: 'Sightseeing',
      description:
        'Arrange transportation for sightseeing and destination exploration.',
      ctaText: 'Plan Sightseeing',
      icon: 'MapPin',
      features: [
        'Scenic destination transport',
        'Sightseeing vehicle arrangements',
        'Customized sightseeing itineraries',
        'Courteous, knowledgeable route drivers',
      ],
    },
    {
      number: '04',
      id: 'hotel-booking',
      title: 'Hotel Booking',
      description:
        'Get assistance with hotel booking as part of your travel arrangements.',
      ctaText: 'Enquire About Hotels',
      icon: 'Building2',
      features: [
        'Hotel booking assistance along route',
        'Accommodation arrangements for your trip',
        'Coordinated travel + stay packages',
        'Seamless stay planning',
      ],
    },
    {
      number: '05',
      id: 'customized-travel',
      title: 'Customized Travel',
      description:
        'Have a specific vehicle or travel requirement? Share your requirements and discuss a customized arrangement.',
      ctaText: 'Request Custom Requirement',
      icon: 'Sparkles',
      features: [
        'Tailored group travel plans',
        'Bespoke vehicle selection',
        'Flexible multi-city itineraries',
        'Dedicated travel coordination',
      ],
    },
  ],
  vehicleCategories: [
    {
      id: 'sedan',
      title: 'Sedan',
      description:
        'Comfortable option for everyday travel and smaller groups.',
      image: '/images/vehicles/sedan.jpg',
      badge: 'Everyday & Business',
      capacity: 'Up to 4 Passengers',
      highlights: [
        'Comfortable air-conditioned cabin',
        'Smooth city & highway handling',
        'Ample luggage boot space',
        'Ideal for solo or small family trips',
      ],
    },
    {
      id: 'suv',
      title: 'SUV',
      description: 'Suitable for family and longer journeys.',
      image: '/images/vehicles/suv.jpg',
      badge: 'Family & Long Distance',
      capacity: '6 to 7 Passengers',
      highlights: [
        'Generous legroom & elevated ride',
        'Spacious cargo & luggage capacity',
        'Comfortable for outstation trips',
        'Ideal for family travel & highways',
      ],
    },
    {
      id: 'premium-vehicles',
      title: 'Premium Vehicles',
      description:
        'For customers looking for a more premium travel experience.',
      image: '/images/vehicles/premium.jpg',
      badge: 'Executive & Luxury',
      capacity: 'Executive Travel',
      highlights: [
        'High-end comfort & prestige',
        'Sophisticated ride quality',
        'Special occasion & VIP travel',
        'Refined ambiance & comfort',
      ],
    },
    {
      id: 'group-vehicles',
      title: 'Group Vehicles',
      description:
        'Suitable for larger groups and sightseeing requirements.',
      image: '/images/vehicles/group.jpg',
      badge: 'Group & Sightseeing',
      capacity: 'Large Groups',
      highlights: [
        'High passenger seating capacity',
        'Luggage carriers & open aisle comfort',
        'Unified group travel experience',
        'Perfect for tours & social gatherings',
      ],
    },
    {
      id: 'customized-vehicle',
      title: 'Customized Vehicle Requirement',
      description:
        'Have a specific vehicle requirement? Contact us and discuss your requirement.',
      image: '/images/vehicles/custom.png',
      badge: 'Tailored Solutions',
      capacity: 'As Per Request',
      highlights: [
        'Flexible vehicle category arrangements',
        'Custom passenger & luggage needs',
        'Special route or event arrangements',
        'Direct consultation with our team',
      ],
    },
  ],
  sightseeingCategories: [
    {
      id: 'city-sightseeing',
      title: 'City Sightseeing',
      description:
        'Comfortable transportation to explore prominent city landmarks, heritage centers, and vibrant hubs.',
      image: '/images/destinations/dest-1.jpg',
    },
    {
      id: 'local-attractions',
      title: 'Local Attractions',
      description:
        'Smooth travel arrangements to popular local cultural spots, markets, and tourist points.',
      image: '/images/destinations/dest-2.jpg',
    },
    {
      id: 'family-trips',
      title: 'Family Trips',
      description:
        'Spacious, relaxed vehicle setups ensuring family members of all ages travel with ease and joy.',
      image: '/images/destinations/dest-3.jpg',
    },
    {
      id: 'weekend-trips',
      title: 'Weekend Trips',
      description:
        'Hassle-free weekend getaway transportation to refresh and unwind at scenic destinations.',
      image: '/images/destinations/dest-4.jpg',
    },
    {
      id: 'outstation-sightseeing',
      title: 'Outstation Sightseeing',
      description:
        'Intercity sightseeing journeys with dedicated vehicle support throughout your expedition.',
      image: '/images/destinations/dest-5.jpg',
    },
    {
      id: 'customized-sightseeing',
      title: 'Customized Sightseeing',
      description:
        'Tell us what points you want to cover and we will arrange the right vehicle and schedule for you.',
      image: '/images/destinations/dest-6.jpg',
    },
  ],
  hotelOptions: [
    {
      id: 'hotel-booking-assistance',
      title: 'Hotel Booking',
      description:
        'For customers looking for accommodation during their trip.',
      image: '/images/hotels/hotel-suite.webp',
      badge: 'Accommodation Assistance',
      features: [
        'Guidance on suitable stay options along your route',
        'Coordinated check-in & travel drop timings',
        'Support for individuals, families, and travel groups',
      ],
    },
    {
      id: 'travel-plus-stay',
      title: 'Travel + Stay',
      description:
        'Combine transportation requirements with hotel booking enquiries.',
      image: '/images/hotels/hotel-resort.webp',
      badge: 'Integrated Solution',
      features: [
        'All-in-one transportation & lodging arrangement',
        'Single point of coordination for vehicle and stay',
        'Tailored to your itinerary and budget preference',
      ],
    },
  ],
  journeySteps: [
    {
      step: 1,
      title: 'Tell Us Your Requirement',
      description:
        'Share your travel route, passenger count, dates, and destination preferences with our team.',
    },
    {
      step: 2,
      title: 'Choose Your Vehicle',
      description:
        'Select from Sedans, SUVs, Premium or Group vehicle options based on your comfort needs.',
    },
    {
      step: 3,
      title: 'Plan Your Route',
      description:
        'Define local, outstation, one-way or round-trip routes with flexible timing flexibility.',
    },
    {
      step: 4,
      title: 'Arrange Sightseeing / Hotel',
      description:
        'Add sightseeing transport arrangements or hotel booking assistance as needed for your trip.',
    },
    {
      step: 5,
      title: 'Confirm Your Booking',
      description:
        'Finalize your itinerary details promptly with our direct support team via call or WhatsApp.',
    },
    {
      step: 6,
      title: 'Enjoy Your Journey',
      description:
        'Travel relaxed with our dependable vehicle service and attentive customer assistance.',
    },
  ],
  galleryItems: [
    {
      id: 'g-heritage-palace',
      title: 'Heritage Palace Courtyard',
      category: 'Heritage Sightseeing',
      location: 'Jodhpur, Rajasthan',
      image: '/images/gallery/gallery-heritage-palace.jpg',
      description:
        'Our premium white vehicle stationed in the grand sandstone courtyard of a Rajasthan heritage palace in Jodhpur.',
    },
    {
      id: 'g-palace-porch',
      title: 'Royal Resort Arrival & Porch',
      category: 'Hotels & Stays',
      location: 'Palace Resort Entrance',
      image: '/images/gallery/gallery-palace-porch.jpg',
      description:
        'Comfortable passenger drop-off and pickup service at luxury hotels and heritage palace resorts.',
    },
    {
      id: 'g-chokho-jodhpur-wide',
      title: 'Chokho Jodhpur Landmark Tour',
      category: 'City Sightseeing',
      location: 'Chokho Jodhpur, Nagar Nigam',
      image: '/images/gallery/gallery-chokho-jodhpur-wide.jpg',
      description:
        'Touring prominent city spots and municipal landmarks with punctual, air-conditioned vehicle service.',
    },
    {
      id: 'g-chokho-jodhpur-1',
      title: 'Gujarat & Rajasthan Travel Corridor',
      category: 'Outstation Routes',
      location: 'Gandhinagar & Jodhpur Routes',
      image: '/images/gallery/gallery-chokho-jodhpur-1.jpg',
      description:
        'Connecting travel routes across our operational bases in Rajasthan and Gujarat seamlessly.',
    },
    {
      id: 'g-chokho-jodhpur-2',
      title: 'Local Attractions & Sightseeing',
      category: 'City Sightseeing',
      location: 'Jodhpur City',
      image: '/images/gallery/gallery-chokho-jodhpur-2.jpg',
      description:
        'Custom vehicle arrangements for local sightseeing, family city tours, and point-to-point journeys.',
    },
    {
      id: 'g-dest-scenic',
      title: 'Scenic Highway Travel',
      category: 'Outstation Routes',
      location: 'Highway Scenic Route',
      image: '/images/destinations/dest-5.jpg',
      description:
        'Dependable outstation journeys with verified drivers, luggage space, and smooth highway handling.',
    },
  ],
  fleetVehicles: [
    {
      id: 'toyota-etios',
      name: 'Toyota Etios',
      categoryTag: 'Sedan',
      pricePerKm: '11',
      priceDisplay: '₹11/km',
      iconEmoji: '🚗',
      image: '/images/fleet/toyota_etios.png',
      specs: ['5 Seater', 'Air Conditioned', 'Comfortable Sedan'],
      suitableFor: ['Local Travel', 'Airport Transfers', 'Business Trips'],
      buttonText: 'Book Now',
    },
    {
      id: 'maruti-dzire',
      name: 'Maruti Suzuki Dzire',
      categoryTag: 'Sedan',
      pricePerKm: '12',
      priceDisplay: '₹12/km',
      iconEmoji: '🚗',
      image: '/images/fleet/swift_dzire.png',
      specs: ['5 Seater', 'Air Conditioned', 'Comfortable Seating'],
      suitableFor: ['Daily Travel', 'Local Trips', 'Family Travel'],
      buttonText: 'Book Now',
    },
    {
      id: 'maruti-ertiga',
      name: 'Maruti Suzuki Ertiga',
      categoryTag: 'MPV',
      pricePerKm: '13',
      priceDisplay: '₹13/km',
      iconEmoji: '🚐',
      image: '/images/fleet/maruti_ertiga.png',
      specs: ['7 Seater', 'Spacious Interior', 'Air Conditioned'],
      suitableFor: ['Family Trips', 'Small Groups', 'Airport Transfers'],
      buttonText: 'Book Now',
    },
    {
      id: 'kia-carens',
      name: 'Kia Carens',
      categoryTag: 'Premium MPV',
      pricePerKm: '15',
      priceDisplay: '₹15/km',
      iconEmoji: '🚐',
      image: '/images/fleet/kia_carens.png',
      specs: ['6/7 Seater', 'Premium Interiors', 'Air Conditioned'],
      suitableFor: ['Family Tours', 'Long Distance Travel', 'Premium Trips'],
      buttonText: 'Book Now',
    },
    {
      id: 'innova-crysta',
      name: 'Toyota Innova Crysta',
      categoryTag: 'Premium SUV',
      pricePerKm: '18',
      priceDisplay: '₹18/km',
      isPopular: true,
      iconEmoji: '🚙',
      image: '/images/fleet/innova_crysta.png',
      specs: [
        '7 Seater',
        'Premium Comfort',
        'Large Luggage Space',
        'Air Conditioned',
      ],
      suitableFor: ['Temple Tours', 'Airport Transfers', 'Hospital Trips'],
      buttonText: 'Book Innova Crysta',
    },
    {
      id: 'tempo-traveller',
      name: 'Tempo Traveller',
      categoryTag: 'Group Vehicle',
      pricePerKm: '24',
      priceDisplay: 'On Enquiry',
      iconEmoji: '🚌',
      image: '/images/fleet/tempo_traveller.png',
      specs: ['Pushback Seats', 'Air Conditioned', 'Group Capacity'],
      suitableFor: ['Group Tours', 'Temple Trips', 'Functions'],
      buttonText: 'Book Traveller',
    },
  ],
};
