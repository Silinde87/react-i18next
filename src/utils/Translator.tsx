import i18next from 'i18next';

type TTranslatorWithComponentsOptions = {
	[key: string]: React.ReactNode;
};

const Translator = (key: string, options?: Object): string => {
	return i18next.t(key, options);
};

const useTranslatorWithComponents = (text: string, options: TTranslatorWithComponentsOptions) => {
	let splitText: string[] = [];

	const returnElements = (elements: string[]) => {
		return elements.map((element) => <span key={element}>{options[element] || element}</span>);
	};

	Object.keys(options).forEach((option) => {
		const regexKey = new RegExp(`(${option})`, 'g');
		splitText = text.split(regexKey);
	});

	return returnElements(splitText);
};

export { Translator, useTranslatorWithComponents };
