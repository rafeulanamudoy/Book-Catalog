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
};
