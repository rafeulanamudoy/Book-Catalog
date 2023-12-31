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
  firstName: string;
  id?: string;
  lastName: string;

  email: string;
  role?: string;
  password: string;
  confirmPassword?: string;
  contactNumber: string;
  superRoleKey?: string;

  gender: Gender;
  address: string;
  designation?: string;
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
enum Gender {
  male,
  female,
}
export type UserCartProps = {
  users: ISignUpData;
};
