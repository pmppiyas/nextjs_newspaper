'use client';

import CategoryCard from '@/app/components/dashboard/admin/category/CategoryCard';
import DeleteConfirmationDialog from '@/app/components/shared/dashboard/DeleteConformationDialog';
import { ICategory } from '@/interfaces/news.Interface';
import { deleteCategory } from '@/services/category/delete.category';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CategoryList({
  categories,
}: {
  categories: ICategory[];
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editedId, setEditedId] = useState<string | null>(null);

  const router = useRouter();

  const handleDelete = (id: string) => {
    setDeletedId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deletedId) return;
    try {
      const result = await deleteCategory(deletedId);

      if (result.success) {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Failed to delete category');
    }
  };

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
            onDelete={handleDelete}
            onEdit={(id) => setEditedId(id)}
          />
        ))}
      </div>

      <DeleteConfirmationDialog
        title="Confirm Delete"
        description="Are you sure you want to delete this category? This action cannot be undone."
        open={isDeleteDialogOpen}
        onOpenChange={() => setIsDeleteDialogOpen(!isDeleteDialogOpen)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
