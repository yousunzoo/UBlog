import { useEffect, useState } from 'react';

export type themeType = 'dark' | 'light';

export const useToggleMode = () => {
	const [theme, setTheme] = useState<themeType>(
		localStorage.getItem('theme') ? (localStorage.getItem('theme') as 'light' | 'dark') : 'light'
	);
	const colorTheme = theme === 'light' ? 'dark' : 'light';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);

		localStorage.setItem('theme', theme);
	}, [theme]);

	return [theme, setTheme];
};
