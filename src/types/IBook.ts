type IStatus = "In Stock" | "Out Of Stock";

export type IBook = {
  Title: string;
  Author: string;
  Genre: string;
  PublicationDate: Date;
  Image: string;
  status: IStatus;
  rating: number;
  price: number;
  copies: number;
  reviews?: string[];
};
export type BookCartProps = {
  book: IBook;
};

export type IStoreBook = {
  searchBook?: string;
  genre?: string;
  publicationYear: string;
};

export type IBookParms = {
  Genre?: string;
  publicationYear?: string;
  query?: string;
};

export type IBookResponse = {
  data: {
    success: boolean;
    statusCode: number;
    message: string;
    data: {
      meta: {
        page: number;
        limit: number;
        count: number;
      };
      data: IBook[];
    };
    // Update this to match the actual data type
  };
  isLoading: boolean;
};
