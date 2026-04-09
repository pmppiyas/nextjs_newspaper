'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { postNews } from '@/services/news/post.news';
import { CategorySelector } from '@/app/components/dashboard/admin/drafts/CategorySelector';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import type { ICategory } from '@/interfaces/news.Interface';
import { MAX_IMAGE_SIZE } from '@/constant/news.constant';
import { useRouter } from 'next/navigation';

const NewsForm = ({ categories }: { categories: ICategory[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE) {
      toast.error('ছবির আকার 5 MB এর বেশি হতে পারবে না।');
      e.target.value = '';
      return;
    }

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      if (categoryId) formData.append('categoryId', categoryId);

      const result = await postNews(formData);

      if (result.success) {
        toast.success(result.message || 'সংবাদ সফলভাবে পোস্ট হয়েছে।');
        form.reset();
        router.push('pending');
        setPreview(null);
        setCategoryId(null);
      } else {
        toast.error(result.message || 'সংবাদ পোস্ট করা যায়নি।');
      }
    } catch (err) {
      console.error('Submission failed', err);
      toast.error('সংবাদ পোস্ট করতে সমস্যা হয়েছে।');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-background border rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
        নতুন সংবাদ তৈরি করুন
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Title */}
        <Field>
          <FieldLabel>শিরোনাম</FieldLabel>
          <Input
            name="title"
            placeholder="সংবাদের শিরোনাম লিখুন"
            required
            disabled={isLoading}
          />
        </Field>

        {/* Content */}
        <Field>
          <FieldLabel>বিস্তারিত</FieldLabel>
          <textarea
            name="content"
            placeholder="সংবাদের বিস্তারিত লিখুন"
            required
            disabled={isLoading}
            rows={6}
            className="w-full border border-border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </Field>

        {/* Category */}
        <Field>
          <FieldLabel>ক্যাটাগরি</FieldLabel>
          <CategorySelector
            categories={categories}
            defaultValue={categoryId || undefined}
            onSelect={(id) => setCategoryId(id)}
          />
        </Field>

        {/* Image */}
        <Field>
          <FieldLabel>ছবি (ঐচ্ছিক)</FieldLabel>
          <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted transition relative">
            {preview ? (
              <Image
                src={preview}
                alt="preview"
                width={500}
                height={350}
                className="object-cover h-full w-full rounded-md"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground text-sm">
                <p>ছবি আপলোড করতে এখানে ক্লিক করুন</p>
                <p className="text-xs">PNG, JPG, WEBP (সর্বাধিক 5 MB)</p>
              </div>
            )}
            <Input
              type="file"
              name="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              disabled={isLoading}
            />
          </label>
        </Field>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin h-4 w-4" />
              পোস্ট করা হচ্ছে...
            </>
          ) : (
            'সংবাদ পোস্ট করুন'
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsForm;
