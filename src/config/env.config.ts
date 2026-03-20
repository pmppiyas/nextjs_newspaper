interface IEnv {
  BACKEND_URL: string | undefined;
  API_VERSION: string | undefined;
  JWT_SECRET: string | undefined;
}

export const env: IEnv = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
  JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
};
