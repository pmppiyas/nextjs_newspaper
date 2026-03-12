import z from 'zod';

export const signupSchema = z
  .object({
    name: z.string().min(2, 'নামের দৈর্ঘ্য কমপক্ষে 2 অক্ষর হতে হবে'),
    email: z.string().email('সঠিক ইমেইল লিখুন'),
    password: z.string().min(6, 'পাসওয়ার্ড কমপক্ষে 6 অক্ষর হতে হবে'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'পাসওয়ার্ড মিলছে না',
    path: ['confirmPassword'],
  });

export type SignupFormData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.string().email('সঠিক ইমেইল লিখুন'),
  password: z.string().min(6, 'পাসওয়ার্ড কমপক্ষে 6 অক্ষর হতে হবে'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
