/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { photos } from '@/assets/assets';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useSignupMutation } from '@/redux/services/authAppi';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import { useRouter } from 'next/navigation';

const signupSchema = z
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

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const [signup, { isLoading }] = useSignupMutation();

  const router = useRouter();

  const onSubmit = async (data: SignupFormData) => {
    try {
      const res = await signup(data).unwrap();

      if (res.success) {
        toast.success(res.message);
        router.push('/');
      } else toast.error(res.data.message);
    } catch (error) {
      const err = error as any;
      toast.error(err?.data?.message || 'An error occurred');
      console.log('Error=>', error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src={photos.ourPhoto}
          alt="Signup Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex flex-1 justify-center items-center p-6 lg:p-12 bg-background">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-primary mb-6">সাইন আপ করুন</h1>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                type="text"
                placeholder="আপনার নাম"
                {...register('name')}
                className="border border-border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="ইমেইল ঠিকানা"
                {...register('email')}
                className="border border-border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field with Eye */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="পাসওয়ার্ড"
                {...register('password')}
                className="border border-border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {!showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-destructive text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field with Eye */}
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                {...register('confirmPassword')}
                className="border border-border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {!showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
              {errors.confirmPassword && (
                <p className="text-destructive text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground py-2 rounded font-semibold hover:bg-green-900 transition flex items-center justify-center disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Spinner />
                  লোডিং...
                </span>
              ) : (
                'সাইন আপ'
              )}
            </button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            ইতিমধ্যেই অ্যাকাউন্ট আছে?{' '}
            <a href="/login" className="text-primary hover:underline">
              লগইন করুন
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
