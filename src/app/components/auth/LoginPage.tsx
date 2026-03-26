/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { photos } from '@/assets/assets';
import { useForm } from 'react-hook-form';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';
import { useLoginMutation } from '@/redux/services/authAppi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { StatusCodes } from 'http-status-codes';
import { loginSchema, type LoginFormData } from '@/validations/auth.validation';
import { setCookie } from '@/utils/cookies';
import { zodResolver } from '@hookform/resolvers/zod';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await login(data).unwrap();
      const { accessToken, refreshToken } = res?.data;
      setCookie({ accessToken, refreshToken });

      router.push('/');

      console.log(res);
      toast.success(res.message);
    } catch (error) {
      const err = error as any;
      if (err.data.statusCode === StatusCodes.NOT_FOUND) {
        router.push('/signup');
      }
      toast.error(err?.data?.message || 'An error occurred');
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src={photos.ourPhoto}
          alt="Login Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Login Form */}
      <div className="flex flex-1 justify-center items-center p-6 lg:p-12 bg-background">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-primary mb-6">লগইন করুন</h1>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(async (data) => {
              await onSubmit(data);
            })}
          >
            {/* Email */}
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

            {/* Password */}
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

            {/* Submit Button */}
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
                'লগইন'
              )}
            </button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            অ্যাকাউন্ট নেই?{' '}
            <Link href="/signup" className="text-primary hover:underline">
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
