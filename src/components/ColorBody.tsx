'use client';
import { useToggleMode } from '@/service/useToggleMode';
import React, { ReactNode, useEffect, useState } from 'react';

function ColorBody({ children }: { children: ReactNode }) {
	const [isMounted, setIsMounted] = useState(false);
	const [theme] = useToggleMode();

	useEffect(() => {
		if (isMounted) return;
		setIsMounted(true);
	}, [theme]);

	if (!isMounted) return <></>;
	return <div id='colorBody'>{children}</div>;
}

export default ColorBody;
