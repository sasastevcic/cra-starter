import i18next, { i18n, InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { Locale, LocalStorageKey } from '../constants/locale';
import en from '../content/locales/en';

const handleLanguageChanged = (locale: Locale): void => {
	localStorage.setItem(LocalStorageKey.Locale, locale);
};

const createInstance = (config: InitOptions): i18n => {
	const instance = i18next.createInstance(config);

	instance.use(initReactI18next);
	instance.use(LanguageDetector).init();

	instance.on('languageChanged', handleLanguageChanged);

	return instance;
};

const regionConfig: InitOptions = {
	resources: {
		en: {
			translation: en,
		},
	},
	fallbackLng: [Locale.En],
	interpolation: {
		escapeValue: false,
	},
	detection: {
		order: ['localStorage'],
	},
};

export const instance: i18n = createInstance(regionConfig);
