export type IUser = {
  user: {
    email: string;
  };
  isLoading: boolean;
  isError: boolean;
  error: string;
};

export type ISignUpData = {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  phoneNumber: string;

  password: string;
  confirmPassword: string;
  address: {
    street: string;
    city: string;
    district: string;
    division: string;
    postal: string;
  };
};

export type ISignInData = {
  email: string;
  password: string;
};
