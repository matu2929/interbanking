import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  DATABASE_HOST: process.env.DATABASE_HOST!,
  PORT: process.env.PORT || 3000,
};
