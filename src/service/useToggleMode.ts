import { useEffect, useState } from 'react';

export type ThemeType = 'dark' | 'light';

interface UseToggleMode {
	(): [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>];
}

export const useToggleMode: UseToggleMode = () => {
	const [theme, setTheme] = useState<ThemeType>(
		typeof window !== 'undefined'
			? localStorage.getItem('theme')
				? (localStorage.getItem('theme') as 'light' | 'dark')
				: 'light'
			: 'light'
	);
	const colorTheme = theme === 'light' ? 'dark' : 'light';

	useEffect(() => {
		const root = window.document.querySelector('#colorBody') as HTMLDivElement;
		if (!root) return;
		root.classList.remove(colorTheme);
		root.classList.add(theme);

		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	return [theme, setTheme];
};
