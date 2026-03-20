'use client';

import CategoryCard from '@/app/components/dashboard/admin/category/CategoryCard';
import CategoryHeader from '@/app/components/dashboard/admin/category/CategoryHeader';
import { useState } from 'react';

interface ICategory {
  id: string;
  name: string;
  description?: string | null;
}

export default function CategoryList({
  categories,
}: {
  categories: ICategory[];
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            id={cat.id}
            name={cat.name}
            description={cat.description}
            isActive={selectedId === cat.id}
            onClick={(id) => setSelectedId(id)}
          />
        ))}
      </div>
    </>
  );
}
