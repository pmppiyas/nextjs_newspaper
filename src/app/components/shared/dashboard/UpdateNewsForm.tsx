'use client';

import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Image as ImageIcon,
  Save,
  Loader2,
  Tags as TagsIcon,
} from 'lucide-react';
import Image from 'next/image';
import { ICategory, INews, ITag } from '@/interfaces/news.Interface';
import { updateNews } from '@/services/news/update.news';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useEffect, useState, ChangeEvent } from 'react';
import { getFormattedTags } from '@/lib/formatter';

const UpdateNewsForm = ({
  news,
  role,
  categories,
}: {
  news: INews;
  categories: ICategory[];
  role: 'ADMIN' | 'JOURNALIST';
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>(
    news?.imageUrl || ''
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      title: news.title,
      content: news.content,
      categoryId: news.categoryId || '',
      tags: getFormattedTags(news?.tags as unknown as ITag[]),
    },
  });

  useEffect(() => {
    if (news) {
      reset({
        title: news.title,
        content: news.content,
        categoryId: news.categoryId || '',
        tags: getFormattedTags(news?.tags as unknown as ITag[]),
      });
      setImagePreview(news.imageUrl || '');
    }
  }, [news, reset]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: {
    title: string;
    content: string;
    categoryId: string;
    tags: string;
  }) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      formData.append('categoryId', data.categoryId);

      const tagsArray = data.tags
        ? data.tags
            .split(',')
            .map((tag: string) => tag.trim())
            .filter(Boolean)
        : [];

      tagsArray.forEach((tag: string) => {
        formData.append('tags[]', tag);
      });

      if (selectedFile) {
        formData.append('image', selectedFile);
      }

      const result = await updateNews({
        newsId: news.id,
        payload: formData,
      });

      if (result?.success) {
        toast.success(result.message);
        router.refresh();
        router.push(`/${role.toLowerCase()}/dashboard/articles`);
      } else {
        toast.error(result?.message || 'আপডেট ব্যর্থ হয়েছে।');
      }
    } catch (error: any) {
      toast.error(error.message || 'কিছু একটা ভুল হয়েছে!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-lg border-primary/10">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="font-semibold text-sm">
              শিরোনাম (Title)
            </Label>
            <Input
              id="title"
              {...register('title', { required: true })}
              className="font-bold text-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-semibold text-sm">ক্যাটাগরি</Label>
              <Controller
                name="categoryId"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="ক্যাটাগরি বেছে নিন" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="tags"
                className="font-semibold text-sm flex items-center gap-2"
              >
                <TagsIcon className="w-4 h-4" /> ট্যাগসমূহ (কমা দিয়ে লিখুন)
              </Label>
              <Input
                id="tags"
                {...register('tags')}
                placeholder="বাংলাদেশ, রাজনীতি, প্রযুক্তি"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-sm">ছবি পরিবর্তন করুন</Label>
            <div className="relative h-64 w-full rounded-xl overflow-hidden border-2 border-dashed border-muted-foreground/20 bg-muted/20 group">
              <Image
                src={imagePreview}
                alt="Preview"
                fill
                className="object-cover"
              />
              <label
                htmlFor="image-upload"
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white"
              >
                <ImageIcon className="w-8 h-8 mb-2" />
                <span>নতুন ছবি সিলেক্ট করুন</span>
                <input
                  id="image-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="font-semibold text-sm">
              মূল খবর
            </Label>
            <Textarea
              id="content"
              {...register('content', { required: true })}
              rows={10}
              className="resize-none"
            />
          </div>

          <div className="flex justify-end gap-4 border-t pt-6">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.back()}
              disabled={isSubmitting}
            >
              বাতিল
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> সেভ হচ্ছে...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> আপডেট করুন
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdateNewsForm;
