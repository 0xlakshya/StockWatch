type userSignupFormDataModel = {
  email: string;
  password: string;
  user_name: string;
  broker: string;
  user_type: string;
};

type userLoginFormDataModel = {
  password: string;
  user_name: string;
};

type IUser = {
  email: string;
  password: string;
  user_name: string;
  broker: string;
  user_type: string;
};
