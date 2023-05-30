'use client';
import { themeType, useToggleMode } from '@/service/useToggleMode';
import React from 'react';

function ThemeToggleBtn() {
	const [theme, setTheme] = useToggleMode();
	return (
		<button
			onClick={() =>
				(setTheme as React.Dispatch<React.SetStateAction<themeType>>)(theme === 'light' ? 'dark' : 'light')
			}
			className={`relative flex w-14 items-center justify-between rounded-2xl ${
				theme === 'light' ? 'bg-green-500' : 'bg-slate-600'
			} px-1 py-[2px]`}>
			<div
				className={`absolute ${
					theme === 'light' && 'translate-x-7'
				} 'left-1' top-1 h-5 w-5 rounded-full bg-white transition-all`}></div>
			<span className='z-1'>🌞</span>
			<span>🌚</span>
		</button>
	);
}

export default ThemeToggleBtn;
