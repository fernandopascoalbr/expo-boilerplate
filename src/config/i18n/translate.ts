import { TranslateOptions } from 'i18n-js';
import i18n from '.';
import { I18nKeys } from './keys';

export const translate = (key: I18nKeys, options?: TranslateOptions) => {
  return i18n.t(key, options);
};