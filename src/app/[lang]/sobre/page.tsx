'use client';

import React, { use } from 'react';
import { getDictionary } from '@/data';
import ResumeView from '@/components/ui/ResumeView';

export default function SobrePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const dict = getDictionary(lang);

  return <ResumeView dict={dict} lang={lang} />;
}
