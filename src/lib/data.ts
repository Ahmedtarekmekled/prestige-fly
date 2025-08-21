import { PrestigeFlyData } from '@/types';

// Import the JSON data
import data from '../../info.json';

export const prestigeFlyData: PrestigeFlyData = data;

export const getLocalizedText = (
  obj: { en: string; fr: string } | undefined,
  locale: 'en' | 'fr'
): string => {
  if (!obj) return '';
  return obj[locale] || obj.en || '';
};

export const getLocalizedArray = (
  obj: { en: string[]; fr: string[] } | undefined,
  locale: 'en' | 'fr'
): string[] => {
  if (!obj) return [];
  return obj[locale] || obj.en || [];
};

export const getLocalizedObject = <T>(
  obj: { en: T; fr: T } | undefined,
  locale: 'en' | 'fr'
): T => {
  if (!obj) return {} as T;
  return obj[locale] || obj.en;
};

export const getPageData = (pageName: keyof PrestigeFlyData['pages_structure']) => {
  return prestigeFlyData.pages_structure[pageName];
};

export const getWebsiteInfo = () => prestigeFlyData.website_info;
export const getBrandIdentity = () => prestigeFlyData.brand_identity;
export const getVisualDesign = () => prestigeFlyData.visual_design;
export const getInteractiveFeatures = () => prestigeFlyData.interactive_features;
export const getSEOData = () => prestigeFlyData.seo_optimization;
