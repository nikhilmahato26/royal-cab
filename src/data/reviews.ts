export interface IndianReview {
  id: string;
  name: string;
  location: string;
  state: 'Rajasthan' | 'Gujarat' | 'Other';
  hub: 'jodhpur' | 'gandhinagar';
  rating: number;
  date: string;
  tripType: string;
  route: string;
  vehicle: string;
  badge: string;
  title: string;
  review: string;
  verified: boolean;
  driverMention?: string;
}

export const INDIAN_REVIEWS_DATA: IndianReview[] = [
  // --- JODHPUR HUB REVIEWS ---
  {
    id: 'rev-jod-1',
    name: 'Rajveer Singh Rathore',
    location: 'BJS Banar Road, Jodhpur',
    state: 'Rajasthan',
    hub: 'jodhpur',
    rating: 5,
    date: 'September 2026',
    tripType: 'Outstation Family Trip',
    route: 'Jodhpur → Jaisalmer & Sam Sand Dunes (3 Days)',
    vehicle: 'Toyota Innova Crysta',
    badge: 'Family Tour',
    title: 'Top-class Innova Crysta & crystal clear pricing',
    review:
      'Booked an Innova Crysta for our 3-day family trip from Jodhpur to Jaisalmer. The car arrived 15 minutes before time right at Banar Road. Immaculate clean seats, chilled AC and plenty of luggage boot room. Driver Narendra ji was polite, safe on the highway, and guided us to genuine Rajasthani dining spots. No hidden charges or surprise tolls.',
    verified: true,
    driverMention: 'Driver Narendra ji',
  },
  {
    id: 'rev-jod-2',
    name: 'Meenakshi & Suresh Sharma',
    location: 'Delhi (Visited Jodhpur)',
    state: 'Other',
    hub: 'jodhpur',
    rating: 5,
    date: 'September 2026',
    tripType: 'Heritage Sightseeing Tour',
    route: 'Jodhpur City (Mehrangarh Fort, Jaswant Thada, Umaid Bhawan)',
    vehicle: 'Maruti Suzuki Dzire',
    badge: 'Sightseeing Tourist',
    title: 'Made our Rajasthan holiday truly stress-free',
    review:
      'We booked Royal Cab for 2 full days of sightseeing in Jodhpur. Our driver was extremely courteous and acted like an expert local guide, waiting patiently while we explored Mehrangarh Fort and the stepwells. The pricing was very fair and booking via WhatsApp was instantaneous.',
    verified: true,
    driverMention: 'Driver Shravan ji',
  },
  {
    id: 'rev-jod-3',
    name: 'Col. Rajendra Singh Bhati (Retd.)',
    location: 'Ratanada, Jodhpur',
    state: 'Rajasthan',
    hub: 'jodhpur',
    rating: 5,
    date: 'August 2026',
    tripType: 'Pilgrimage & Heritage',
    route: 'Jodhpur → Osian Mataji Temple & Khimsar',
    vehicle: 'Toyota Etios',
    badge: 'Verified Resident',
    title: 'Disciplined, punctual and honest per-km billing',
    review:
      'Royal Cab is my preferred choice for all outstation family journeys in Marwar. Transparent per-kilometer billing with zero fuss. Driver was in proper uniform, disciplined, and drove at safe speeds throughout the highway journey. Highly recommend their service.',
    verified: true,
    driverMention: 'Driver Vikram ji',
  },
  {
    id: 'rev-jod-4',
    name: 'Pooja Bishnoi & Group',
    location: 'Banar Road, Jodhpur',
    state: 'Rajasthan',
    hub: 'jodhpur',
    rating: 5,
    date: 'August 2026',
    tripType: 'Wedding & Group Travel',
    route: 'Jodhpur → Pali → Jodhpur (Round Trip)',
    vehicle: 'Tempo Traveller',
    badge: 'Group Booking',
    title: 'Tempo Traveller was spotless with strong air-conditioning',
    review:
      'We rented their Tempo Traveller for 15 family members attending a wedding ceremony. Excellent pushback seats, smooth suspension, and pristine audio system. The booking manager kept in constant touch on WhatsApp. Will definitely book again for family events.',
    verified: true,
  },
  {
    id: 'rev-jod-5',
    name: 'Devendra Joshi',
    location: 'Sardarpura, Jodhpur',
    state: 'Rajasthan',
    hub: 'jodhpur',
    rating: 5,
    date: 'July 2026',
    tripType: 'Airport Transfer',
    route: 'Jodhpur Airport → City Hotel Drop',
    vehicle: 'Maruti Suzuki Dzire',
    badge: 'Airport Transfer',
    title: 'Prompt airport pickup on time despite flight delay',
    review:
      'My flight from Mumbai was delayed by 40 minutes, but the Royal Cab chauffeur was waiting at Jodhpur airport arrival gate with my name board. Smooth, chilled AC ride to the hotel. Transparent ₹12/km Sedan billing.',
    verified: true,
    driverMention: 'Driver Ramesh ji',
  },

  // --- GANDHINAGAR HUB REVIEWS ---
  {
    id: 'rev-gan-1',
    name: 'Dr. Bhavik Patel',
    location: 'Dadunagar, Gandhinagar',
    state: 'Gujarat',
    hub: 'gandhinagar',
    rating: 5,
    date: 'September 2026',
    tripType: 'Airport & Corporate Transfer',
    route: 'Gandhinagar (Dadunagar) → SVPI Ahmedabad Airport',
    vehicle: 'Maruti Suzuki Dzire',
    badge: 'Frequent Commuter',
    title: 'Never missed a 4:30 AM airport drop in 6 months',
    review:
      'I frequently book Royal Cab Service from their Dadunagar Gandhinagar desk for early morning flights to Delhi and Bangalore. Never had a delay or cancellation. Drivers arrive 10 minutes prior, help with heavy bags, and maintain clean cars.',
    verified: true,
    driverMention: 'Driver Paresh Bhai',
  },
  {
    id: 'rev-gan-2',
    name: 'Hardik Dave',
    location: 'Sector 21, Gandhinagar',
    state: 'Gujarat',
    hub: 'gandhinagar',
    rating: 5,
    date: 'September 2026',
    tripType: 'Saurashtra Pilgrimage',
    route: 'Gandhinagar → Somnath & Dwarka (4 Days)',
    vehicle: 'Maruti Suzuki Ertiga',
    badge: 'Pilgrimage Tour',
    title: 'Wonderful temple darshan trip with senior citizen parents',
    review:
      'Took my elderly parents on a 4-day pilgrimage to Somnath, Porbandar, and Dwarkadhish. The Ertiga was comfortable with pushback seats and huge luggage capacity. Chauffeur drove cautiously, took regular break stops for elderly tea breaks, and knew good vegetarian family restaurants.',
    verified: true,
    driverMention: 'Driver Dharmesh Bhai',
  },
  {
    id: 'rev-gan-3',
    name: 'Chintan Shah & Family',
    location: 'Kudasan, Gandhinagar',
    state: 'Gujarat',
    hub: 'gandhinagar',
    rating: 5,
    date: 'August 2026',
    tripType: 'Hill Station Getaway',
    route: 'Gandhinagar → Mount Abu & Ambaji (Weekend)',
    vehicle: 'Toyota Innova Crysta',
    badge: 'Weekend Trip',
    title: 'Flawless mountain driving and luxury comfort',
    review:
      'Royal Cab arranged a pristine Toyota Innova Crysta for our weekend retreat to Mount Abu. The car was in showroom condition with powerful hill-climb performance and smooth braking. Best cab operator in Gandhinagar area!',
    verified: true,
    driverMention: 'Driver Jignesh Bhai',
  },
  {
    id: 'rev-gan-4',
    name: 'Hetal & Pragnesh Vaghela',
    location: 'Dabhoda, Gandhinagar',
    state: 'Gujarat',
    hub: 'gandhinagar',
    rating: 5,
    date: 'August 2026',
    tripType: 'Local & Outstation',
    route: 'Gandhinagar Hub → GIFT City & Ahmedabad',
    vehicle: 'Maruti Suzuki Dzire',
    badge: 'Local Resident',
    title: 'Very reliable local team right here in Dabhoda',
    review:
      'Having their operational base near JK Farm House road in Dabhoda makes booking local and outstation taxis very hassle-free. Prompt phone response from the dispatch team, polite drivers, and no bargaining required.',
    verified: true,
  },
  {
    id: 'rev-gan-5',
    name: 'Kiritbhai Shah',
    location: 'Sector 7, Gandhinagar',
    state: 'Gujarat',
    hub: 'gandhinagar',
    rating: 5,
    date: 'July 2026',
    tripType: 'Interstate Outstation',
    route: 'Gandhinagar (Gujarat) → Udaipur (Rajasthan)',
    vehicle: 'Kia Carens',
    badge: 'Interstate Tour',
    title: 'Seamless Gujarat to Rajasthan corridor journey',
    review:
      'Traveled with Royal Cab from Gandhinagar to Udaipur. Since they have bases in both Gujarat and Rajasthan, their drivers understand both highway routes and toll regulations perfectly. Excellent AC and comfortable captain seats.',
    verified: true,
  },
];

export const LOCATION_REVIEWS_SUMMARY = {
  jodhpur: {
    averageRating: 4.9,
    totalReviews: 284,
    googleRatingText: '4.9 ★★★★★ on Google & Direct Rides',
    highlightText: 'Top-rated cab service across BJS Banar Road, Jodhpur Junction & Rajasthan heritage routes.',
    featuredReviews: [
      INDIAN_REVIEWS_DATA[0], // Rajveer Singh Rathore
      INDIAN_REVIEWS_DATA[1], // Meenakshi & Suresh Sharma
      INDIAN_REVIEWS_DATA[2], // Col. Rajendra Singh Bhati
    ],
  },
  gandhinagar: {
    averageRating: 4.8,
    totalReviews: 196,
    googleRatingText: '4.8 ★★★★★ on Google & Direct Rides',
    highlightText: 'Punctual taxi service serving Dadunagar, Dabhoda, GIFT City & SVPI Airport drops.',
    featuredReviews: [
      INDIAN_REVIEWS_DATA[5], // Dr. Bhavik Patel
      INDIAN_REVIEWS_DATA[6], // Hardik Dave
      INDIAN_REVIEWS_DATA[7], // Chintan Shah
    ],
  },
};
