export type IService = {
  id: string;
  name: string;
  image: string;
  description: string;
  serviceStatus: ServiceStatus;
  price: number;
  category: {
    title: string;
  };
  categoryId: string;
  reviews: string[];
};
export type ServiceCartProps = {
  service: IService;
};

enum ServiceStatus {
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
