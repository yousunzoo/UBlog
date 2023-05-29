import React from 'react';

type BannerData = {
	message: string;
	state: 'success' | 'error';
};
function Banner({ banner: { message, state } }: { banner: BannerData }) {
	const isSucess = state === 'success';
	const icon = isSucess ? '✅' : '❎';
	return <p className={`mt-4 p-2 ${isSucess ? 'bg-green-300' : 'bg-red-300'}`}>{`${icon} ${message}`}</p>;
}

export default Banner;
