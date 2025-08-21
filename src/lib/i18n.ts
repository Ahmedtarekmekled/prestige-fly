export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;

export const getLocaleFromPath = (pathname: string): 'en' | 'fr' => {
  if (pathname.startsWith('/fr/')) return 'fr';
  return 'en';
};

export const getLocalizedPath = (pathname: string, locale: 'en' | 'fr'): string => {
  if (locale === 'fr') {
    return `/fr${pathname}`;
  }
  return pathname;
};

export const removeLocaleFromPath = (pathname: string): string => {
  return pathname.replace(/^\/fr/, '');
};
