import { IService } from "./IService";

export type IBooking = {
  addToCart: IService[];
};

export type IBookingService = {
  serviceId: string;
  userId: string;
  timeSlot: string;
  startDate: string;
  colorScheme?: string;
  userRequerment?: string;
  location: string;
  dimention: {
    width: string;
    height: string;
  };
  bookingStatus?: string;
};
export type IReturnBooking = {
  serviceId: string;
  id?: string;
  serviceType: IService;
  bookingStatus: string;
  userId: string;
  timeSlot: string;
  startDate: string;
  colorScheme?: string;
  userRequerment?: string;
  location: string;

  dimention: {
    width: string;
    height: string;
  };
};
export type BookingCartProps = {
  booking: IReturnBooking;
};
