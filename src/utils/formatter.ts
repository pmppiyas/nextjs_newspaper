export function banglaDayFormatter(date: string) {
  return new Date(date).toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
