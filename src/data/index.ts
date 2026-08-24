import { contentPt } from './content-pt';
import { contentEn } from './content-en';
import { PortfolioDictionary } from './types';

export function getDictionary(lang: string | undefined): PortfolioDictionary {
  if (lang === 'en') {
    return contentEn;
  }
  return contentPt;
}

export * from './types';
export { contentPt, contentEn };
