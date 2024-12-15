import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '../locales/en-US/translation.json';

const resources = {
  'en-US': {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en-US',
  fallbackLng: 'en-US',
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
