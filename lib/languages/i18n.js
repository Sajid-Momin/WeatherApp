import english from "./english.json";
import hindi from "./hindi.json";
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// import {getLocales} from 'react-native-localize';

i18n.use(initReactI18next).init({
//   lng: getLocales()[0].languageCode,
    lng : 'en',
  fallbackLng: 'en',
  resources: {
    en: english,
    hi: hindi
  },
  react: {
      useSuspense: false
  }
});

export default i18n;