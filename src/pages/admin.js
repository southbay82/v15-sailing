import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminRedirect() {
  const router = useRouter();
  useEffect(() => {
    // Client-side redirect to static CMS
    if (typeof window !== 'undefined') {
      window.location.replace('/admin/index.html');
    }
  }, [router]);

  return null;
}
