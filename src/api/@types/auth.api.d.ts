type loginRequestBody = {
  email: string;
  password: string;
};

type loginRequest = {
  body: loginRequestBody;
};

type ILoginResponse = {
  id: string;
  email: string;
  name: string;
};

type loginResponse = {
  accessToken: string;
  //   refreshToken: string;
  //   user: ILoginResponse;
};
