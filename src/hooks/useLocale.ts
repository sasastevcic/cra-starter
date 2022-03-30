import { useTranslation } from 'react-i18next';
import type { LocaleContent } from '../content/content-types';

type UseLocaleType<T extends keyof LocaleContent, U extends keyof LocaleContent[T]> = Extract<
	keyof LocaleContent[T],
	U
> extends never
	? LocaleContent[T]
	: LocaleContent[T][U];

/**
 * @description a hook for using localization
 * @returns an object or a string with translations for passed parameter
 * @param category property name from locales
 * @param key property name from category
 * @example const { title } = useLocale('shared');
 * const title = useLocale('shared', 'title');
 */
export const useLocale = <T extends keyof LocaleContent, U extends keyof LocaleContent[T] = never>(
	category: T,
	key?: U,
): UseLocaleType<T, U> => {
	const [translate] = useTranslation();
	const translationPath: string = key ? `${category}.${key}` : category;
	return translate(translationPath, {
		returnObjects: true,
	}) as UseLocaleType<T, U>;
};
