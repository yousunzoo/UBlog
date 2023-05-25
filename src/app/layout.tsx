import './globals.css';
import { Noto_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const noto = Noto_Sans({ weight: '500', subsets: ['latin'] });

export const metadata = {
	title: 'UBlog',
	description: 'Next.js 기반으로 만들어진 블로그입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ko-KR' className='light'>
			<head>
				<link rel='shortcut icon' href='/icons/favicon.ico' />
			</head>
			<body className={`${noto.className} mx-auto flex w-full max-w-screen-2xl flex-col`}>
				<Header title={metadata.title} />
				<main className='mx-auto w-full max-w-screen-2xl grow px-6 pt-[100px]'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
