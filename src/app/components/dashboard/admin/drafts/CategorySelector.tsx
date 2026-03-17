'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ICategory } from '@/interfaces/news.Interface';

interface CategorySelectorProps {
  categories: ICategory[];
  onSelect: (id: string) => void;
  defaultValue?: string;
}

export function CategorySelector({
  categories,
  onSelect,
  defaultValue,
}: CategorySelectorProps) {
  return (
    <Select onValueChange={onSelect} defaultValue={defaultValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="সিলেক্ট ক্যাটাগরি" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((cat) => (
          <SelectItem key={cat.id} value={cat.id}>
            {cat.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
