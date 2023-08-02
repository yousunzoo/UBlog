'use client';
import { useToggleMode } from '@/service/useToggleMode';
import React, { useEffect, useState } from 'react';

function ThemeToggleBtn() {
	const [theme, setTheme] = useToggleMode();
	const islightMode = theme === 'light';
	console.log(theme);
	return (
		<button
			onClick={() => setTheme(islightMode ? 'dark' : 'light')}
			className={`relative flex w-14 items-center justify-between rounded-2xl ${
				islightMode ? 'bg-green-500' : 'bg-slate-600'
			} px-1 py-[2px]`}>
			<div
				className={`absolute ${
					islightMode && 'translate-x-7'
				} 'left-1' top-1 h-5 w-5 rounded-full bg-white transition-all`}></div>
			<span className='z-1'>🌞</span>
			<span>🌚</span>
		</button>
	);
}

export default ThemeToggleBtn;
