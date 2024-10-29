'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirecionar para a primeira questão
    router.push('/question/S1Q1');
  }, [router]);

  return null;
}
