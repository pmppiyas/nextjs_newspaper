'use client';

import { Field } from '@/components/ui/field';

const NewsFormSkeleton = () => (
  <div className="max-w-xl mx-auto mt-10 p-6 bg-card border border-border rounded-xl animate-pulse">
    {/* Form Title */}
    <div className="h-8 w-1/3 bg-muted rounded mb-6" />

    <div className="flex flex-col gap-5">
      {/* Title Field */}
      <Field>
        <div className="h-10 bg-muted rounded w-full" />
      </Field>

      {/* Content Field */}
      <Field>
        <div className="h-24 bg-muted rounded w-full" />
      </Field>

      {/* Category Field */}
      <Field>
        <div className="h-10 bg-muted rounded w-full" />
      </Field>

      {/* Image Upload Field */}
      <Field>
        <div className="h-40 bg-muted rounded w-full" />
      </Field>

      {/* Submit Button */}
      <div className="h-10 bg-muted rounded w-full mt-2" />
    </div>
  </div>
);

export default NewsFormSkeleton;
