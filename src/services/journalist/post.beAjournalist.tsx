import { serverFetch } from '@/utils/serverFetch';

export async function beAjournalist() {
  const res = await serverFetch.post('journalist/request');

  const result = await res.json();

  return result;
}
