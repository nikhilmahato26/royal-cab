import { BUSINESS_DATA } from '../data/business';

export interface BookingFormData {
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  vehicleRequirement: string;
  tripType: string;
  passengers: string;
  name?: string;
  phone?: string;
  additionalRequirement?: string;
}

export const createWhatsAppBookingLink = (data: Partial<BookingFormData>): string => {
  const parts: string[] = [
    `*ROYAL CAB SERVICE — BOOKING / TRAVEL ENQUIRY*`,
    `Hello Royal Cab Service, I would like to inquire about booking/travel services:`,
    '',
  ];

  if (data.tripType) parts.push(`• *Trip Type:* ${data.tripType}`);
  if (data.vehicleRequirement) parts.push(`• *Vehicle Requirement:* ${data.vehicleRequirement}`);
  if (data.pickupLocation) parts.push(`• *Pickup Location:* ${data.pickupLocation}`);
  if (data.dropLocation) parts.push(`• *Drop / Destination:* ${data.dropLocation}`);
  if (data.travelDate) parts.push(`• *Travel Date:* ${data.travelDate}`);
  if (data.passengers) parts.push(`• *Passengers:* ${data.passengers}`);
  if (data.name) parts.push(`• *Customer Name:* ${data.name}`);
  if (data.phone) parts.push(`• *Contact Phone:* ${data.phone}`);
  if (data.additionalRequirement) parts.push(`• *Additional Note:* ${data.additionalRequirement}`);

  parts.push('');
  parts.push('Please share vehicle availability and quote. Thank you!');

  const message = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/91${BUSINESS_DATA.phones.primary}?text=${message}`;
};

export const createGeneralWhatsAppLink = (contextText?: string): string => {
  const defaultText = contextText 
    ? `Hello Royal Cab Service, I am inquiring about ${contextText}. Please share details.`
    : `Hello Royal Cab Service, I would like to enquire about cab booking, vehicle rental, or sightseeing services.`;
  return `https://wa.me/91${BUSINESS_DATA.phones.primary}?text=${encodeURIComponent(defaultText)}`;
};

export const createEmailLink = (subject?: string, body?: string): string => {
  const mailSubject = encodeURIComponent(subject || 'Travel & Vehicle Enquiry - Royal Cab Service');
  const mailBody = encodeURIComponent(body || 'Hello Royal Cab Service,\n\nI would like to inquire about your vehicle rental and travel booking services.\n\nThank you.');
  return `mailto:${BUSINESS_DATA.email}?subject=${mailSubject}&body=${mailBody}`;
};
