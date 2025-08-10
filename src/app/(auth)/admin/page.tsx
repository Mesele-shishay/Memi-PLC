"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminHomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if user is already authenticated
    router.push('/dashboard');
  }, [router]);

  return null;
}
