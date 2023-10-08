export type IBook = {
  _id: string;
  Title: string;
  Author: string;
  Genre: string;
  PublicationDate: Date;
  Image: string;
  Email: string;

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

export type IReview = {
  email: string;
  _id: string;
  reveiw: string;
};
export type IReviewData = {
  id: string;
  userReview: IReview;
};
