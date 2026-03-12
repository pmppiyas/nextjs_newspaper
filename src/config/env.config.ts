import { z } from 'zod';

// ১. একটি স্কিমা ডিফাইন করুন (টাইপ সেফটির জন্য)
const envSchema = z.object({
  BACKEND_URL: z.string().url().default('http://localhost:5000'),
  API_VERSION: z.string().default('v1'),
});

const parsedEnv = envSchema.safeParse({
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
});

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format());
}

export const env = parsedEnv.success
  ? parsedEnv.data
  : {
      BACKEND_URL: 'http://localhost:5000',
      API_VERSION: 'v1',
    };
