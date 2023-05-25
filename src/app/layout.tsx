import Link from 'next/link';
import './globals.css';
import { Noto_Sans } from 'next/font/google';
import Image from 'next/image';
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
				<header className='fixed left-0 top-0 z-10 w-full border-b border-slate-200 bg-white/80 px-6 py-3 dark:border-zinc-700 dark:bg-black/80'>
					<div className='mx-auto flex max-w-screen-2xl items-center justify-between'>
						<Link href='/' className='flex items-center gap-1 text-2xl font-bold text-black dark:text-white'>
							<Image src='/images/logo.png' alt='logo' width={50} height={50} />
							<h1>{metadata.title}</h1>
						</Link>
						<nav>
							<ul className='flex text-slate-500 dark:text-gray-50'>
								<li className='mx-2'>
									<Link href='/'>Home</Link>
								</li>
								<li className='mx-2'>
									<Link href='/about'>About</Link>
								</li>
								<li className='mx-2'>
									<Link href='/posts'>Posts</Link>
								</li>
								<li className='mx-2'>
									<Link href='/contact'>Contact</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main className='pt-[65px]'>{children}</main>
			</body>
		</html>
	);
}
