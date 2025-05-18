import form from './locales/pt_br/form.json';
import home from './locales/pt_br/home.json';
import screen from './locales/pt_br/screen.json';

const i18nBase = {
  home,
  form,
  screen
} as const;

type I18nBase = typeof i18nBase;

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type DotPaths<T> = {
  [K in keyof T]: T[K] extends string
    ? K
    : T[K] extends object
    ? Join<K, DotPaths<T[K]>>
    : never;
}[keyof T];

export type I18nKeys = DotPaths<I18nBase>;
