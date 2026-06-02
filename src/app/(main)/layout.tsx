import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/performance/ScrollToTop';
import WhatsAppButton from '@/components/performance/WhatsAppButton';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
