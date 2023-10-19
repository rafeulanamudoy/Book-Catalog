export type IService = {
  id?: string;
  name: string;
  image: string;
  description: string;
  serviceStatus: string;
  price: number;
  category?: {
    title?: string;
  };
  categoryId: string;
  reviews?: string[];
};

export type ServiceCartProps = {
  service: IService;
};

export enum ServiceStatus {
  available,
  upcoming,
  unavailable,
  all,
}

export type IProductFilter = {
  isOpen: boolean;
  onClose: () => void; // onClose should be a function that doesn't take any arguments and returns void
};

export type IServiceFilter = {
  filters: {
    minPrice?: number;
    maxPrice?: number;
    category?: string;
    serviceStatus?: string;
  };
  search?: string;
};

export type IFilterQuery = {
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  serviceStatus?: string;
  search?: string;
};
export type IServiceBook = {
  serviceId: string;
  userId: string;
  startTime: Date;
  timeSlot: string;
  colorSceme: string | undefined;
  userRequerment: string | undefined;
  location: string;
};
export type IReview = {
  id?: string;
  review: string;
  rating: number;
  userId: string;
  serviceId: string;
};
export type IReviewData = {
  id: string;
  userReview: IReview;
};
