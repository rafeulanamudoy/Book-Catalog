export type IUser = {
  user: {
    email: string;
    role: string;
  };
  isLoading: boolean;
  isError: boolean;
  error: string;
};

export type ISignUpData = {
  email: string;
  role?: string;
  password: string;
  confirmPassword?: string;
};

export type ISignInData = {
  email: string;
  password: string;
  role: string;
};

export type IUserResponseData = {
  email: string;
  role?: string;
  password: string;
};
