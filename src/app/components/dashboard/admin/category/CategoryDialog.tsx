/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';
import { createCategory } from '@/services/category/post.category';

interface ICategoryDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CategoryDialog: React.FC<ICategoryDialogProps> = ({
  open,
  onClose,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await createCategory({ name, description });

      if (response.success) {
        toast.success(response.message);
        onSuccess();
        onClose();
        setName('');
        setDescription('');
        router.refresh();
      } else {
        setError(response.message);
        toast.error(response.message || 'Failed to create category');
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[80vw] max-w-md p-6">
        <DialogHeader>
          <DialogTitle>নতুন ক্যাটাগরি তৈরি করুন</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          {/* Category Name */}
          <Field>
            <FieldLabel>নাম</FieldLabel>
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="উদাহরণ: ICT"
              required
            />
          </Field>

          {/* Category Description */}
          <Field>
            <FieldLabel>বর্ণনা (ঐচ্ছিক)</FieldLabel>
            <Input
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="উদাহরণ: Information and Communication Technology"
            />
          </Field>

          {/* Error */}
          {error && <p className="text-destructive  text-sm">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              বাতিল করুন
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'তৈরি করা হচ্ছে...' : 'ক্যাটাগরি তৈরি করুন'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDialog;
