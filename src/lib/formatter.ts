import { ITag } from '@/interfaces/news.Interface';

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export const getFormattedTags = (tags: ITag[]) => {
  if (!tags || !Array.isArray(tags)) return '';
  return tags.map((t) => (typeof t === 'string' ? t : t.name)).join(', ');
};
