import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const i18nextConfig = (literals: Object, localeId: string) => {
	return i18next.use(initReactI18next).init({
		compatibilityJSON: 'v3',
		resources: {
			[localeId]: {
				translation: {
					...literals,
				},
			},
		},
		lng: 'es-ES',
		fallbackLng: 'es-ES',
		keySeparator: false,

		interpolation: {
			escapeValue: false,
		},
	});
};

export default i18nextConfig;
