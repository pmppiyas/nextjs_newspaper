'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2, Send, Newspaper, ShieldCheck, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { beAjournalist } from '@/services/journalist/post.beAjournalist';

const BeAJournalistPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const handleApply = async () => {
    setIsSubmitting(true);
    try {
      const response = await beAjournalist();

      if (response.success) {
        toast.success(response.message || 'আবেদনটি সফলভাবে পাঠানো হয়েছে!');
        setHasApplied(true);
      } else {
        toast.error(response.message || 'আবেদনটি গ্রহণ করা হয়নি।');
      }
    } catch (error: any) {
      toast.error(error.message || 'কিছু ভুল হয়েছে');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasApplied) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full text-center p-6 shadow-lg border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
            </div>
            <h2 className="text-2xl font-bold mb-2">আবেদন জমা হয়েছে!</h2>
            <p className="text-muted-foreground">
              আপনার জার্নালিস্ট হওয়ার আবেদনটি বর্তমানে আমাদের রিভিউ টিমের কাছে
              পেন্ডিং আছে। অ্যাডমিন এপ্রুভ করলে আপনি নোটিফিকেশন পাবেন।
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          আমাদের <span className="text-primary">সাংবাদিক</span> টিমে যোগ দিন
        </h1>
        <p className="text-lg text-muted-foreground">
          আপনার লেখা পৌঁছে দিন হাজারো মানুষের কাছে। সত্য ও বস্তুনিষ্ঠ সংবাদ
          প্রকাশে আমাদের সহযোগী হন।
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <FeatureCard
          icon={<Newspaper className="w-6 h-6 text-blue-500" />}
          title="নিউজ পাবলিশ"
          desc="সরাসরি পোর্টাল থেকে আপনার নিউজ পাবলিশ করার ক্ষমতা পাবেন।"
        />
        <FeatureCard
          icon={<ShieldCheck className="w-6 h-6 text-green-500" />}
          title="ভেরিফাইড প্রোফাইল"
          desc="আপনার নামের পাশে একটি অফিসিয়াল জার্নালিস্ট ব্যাজ যুক্ত হবে।"
        />
        <FeatureCard
          icon={<Zap className="w-6 h-6 text-amber-500" />}
          title="কুইক এক্সেস"
          desc="ড্যাশবোর্ডের বিশেষ টুলস ব্যবহার করে দ্রুত রিপোর্ট তৈরি করতে পারবেন।"
        />
      </div>

      <Card className="border-2 border-primary/10 shadow-xl overflow-hidden">
        <CardHeader className="bg-primary/5 border-b border-primary/10">
          <CardTitle>আবেদন ফর্ম</CardTitle>
          <CardDescription>
            নিচের বাটনে ক্লিক করে আপনার রিকোয়েস্টটি অ্যাডমিনের কাছে পাঠান।
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 flex flex-col items-center">
          <div className="bg-muted p-4 rounded-full mb-6">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <p className="text-center mb-8 text-muted-foreground max-w-sm">
            আবেদন করার মাধ্যমে আপনি আমাদের সাংবাদিকতা নীতিমালা এবং শর্তাবলীতে
            সম্মতি প্রদান করছেন।
          </p>
          <Button
            size="lg"
            className="w-full sm:w-64 font-bold text-md"
            onClick={handleApply}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'আবেদন পাঠানো হচ্ছে...' : 'আবেদন করুন'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <Card className="text-center p-4 hover:shadow-md transition-shadow">
    <div className="flex justify-center mb-3">{icon}</div>
    <h3 className="font-bold mb-1">{title}</h3>
    <p className="text-xs text-muted-foreground">{desc}</p>
  </Card>
);

export default BeAJournalistPage;
