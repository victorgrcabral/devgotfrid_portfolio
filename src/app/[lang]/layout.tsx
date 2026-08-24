import React from 'react';
import CustomCursor from '@/components/ui/CustomCursor';

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="relative min-h-screen flex flex-col" data-locale={lang}>
      <CustomCursor />
      {children}
    </div>
  );
}
