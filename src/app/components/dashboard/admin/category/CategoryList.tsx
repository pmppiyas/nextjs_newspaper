'use client';

import CategoryCard from '@/app/components/dashboard/admin/category/CategoryCard';
import CategoryDialog from '@/app/components/dashboard/admin/category/CategoryDialog';
import DeleteConfirmationDialog from '@/app/components/shared/dashboard/DeleteConformationDialog';
import { ICategory } from '@/interfaces/news.Interface';
import { deleteCategory } from '@/services/category/delete.category';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import { updateCategoryPositions } from '@/services/category/updateCategoryPositions';

export default function CategoryList({
  initialCategories,
}: {
  initialCategories: ICategory[];
}) {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editedId, setEditedId] = useState<string | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

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
        handleRefresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Failed to delete category');
    }
  };

  const handleEdit = (id: string) => {
    setEditedId(id);
    setIsEditDialogOpen(true);
  };

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(categories);
    const [recordedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItem);

    setCategories(items);

    const updatedItems = items.map((cat, idx) => ({
      id: cat.id,
      position: idx,
    }));

    const update = await updateCategoryPositions(updatedItems);

    if (update.success) {
      toast.success(update.message);
    } else {
      toast.error(update.message);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="categories" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {categories.map((cat, index) => (
                <Draggable key={cat.id} draggableId={cat.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CategoryCard
                        key={cat.id}
                        id={cat.id}
                        name={cat.name}
                        description={cat.description}
                        isActive={selectedId === cat.id}
                        onClick={(id) => setSelectedId(id)}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <CategoryDialog
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onSuccess={handleRefresh}
        initialData={categories.find((cat) => cat.id === editedId) || null}
      />

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
