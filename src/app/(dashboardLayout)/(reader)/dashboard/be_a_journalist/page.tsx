import BeAJournalistForm from '@/app/components/dashboard/reader/be_a_journalist/BeAJournalistForm';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BeAJournalistForm />
    </Suspense>
  );
}
