import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import en_form from './locales/en/form.json';
import en_home from './locales/en/home.json';
import en_screen from './locales/en/screen.json';

import pt_form from './locales/pt_br/form.json';
import pt_home from './locales/pt_br/home.json';
import pt_screen from './locales/pt_br/screen.json';

const translations = {
  en: {
    home: en_home,
    form: en_form,
    screen: en_screen
  },
  pt_BR: {
    home: pt_home,
    form: pt_form,
    screen: pt_screen
  }
};

const i18n = new I18n(translations);

i18n.locale = getLocales()[0]?.languageTag?.toLowerCase() ?? 'pt_BR';
i18n.enableFallback = true;

export default i18n;
