import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { formatDate, isMonthType } from './../utils/date_utils';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import it from './it.json';
import pt from './pt.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
      format: (value: any, format?: string, lng?: string) => {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }

        if (value instanceof Date) {
          return formatDate(value, isMonthType(format) ? format : 'long', lng);
        }
      }
    },
    resources: {
      'pt-BR': pt,
      'en-US': en,
      'es-ES': es,
      'fr-FR': fr,
      'it-IT': it
    }
  });

export default i18next;