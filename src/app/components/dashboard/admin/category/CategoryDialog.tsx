/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
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
import { createCategory } from '@/services/category/post.category';
import { ICategory } from '@/interfaces/news.Interface';
import { updateCategory } from '@/services/category/update.category';

interface ICategoryDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: ICategory | null;
}

const CategoryDialog: React.FC<ICategoryDialogProps> = ({
  open,
  onClose,
  onSuccess,
  initialData,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const isEditMode = !!initialData;

  useEffect(() => {
    if (open) {
      setName(initialData?.name || '');
      setDescription(initialData?.description || '');
    }
  }, [open, initialData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (isEditMode && initialData?.id) {
        response = await updateCategory(initialData.id, { name, description });
      } else {
        response = await createCategory({ name, description });
      }

      if (response.success) {
        toast.success(response.message);
        onSuccess();
        onClose();
        if (!isEditMode) {
          setName('');
          setDescription('');
        }
      } else {
        toast.error(response.message || 'ব্যর্থ হয়েছে');
      }
    } catch (err: any) {
      toast.error(err.message || 'সার্ভার ত্রুটি');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[80vw] max-w-md p-6">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? 'ক্যাটাগরি আপডেট করুন' : 'নতুন ক্যাটাগরি তৈরি করুন'}
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <Field>
            <FieldLabel>নাম</FieldLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="উদাহরণ: ICT"
              required
            />
          </Field>

          <Field>
            <FieldLabel>বর্ণনা (ঐচ্ছিক)</FieldLabel>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="বর্ণনা লিখুন..."
            />
          </Field>

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
              {loading
                ? 'প্রসেসিং...'
                : isEditMode
                  ? 'আপডেট করুন'
                  : 'তৈরি করুন'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDialog;
