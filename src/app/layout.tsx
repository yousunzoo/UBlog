import Link from 'next/link';
import './globals.css';
import { Noto_Sans } from 'next/font/google';

const noto = Noto_Sans({ weight: '500', subsets: ['latin'] });

export const metadata = {
	title: 'UBlog',
	description: 'Next.js 기반으로 만들어진 블로그입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ko-KR' className='light'>
			<body className={noto.className}>
				<header className='fixed flex w-full bg-white/80 dark:bg-black/80 border-b border-slate-200 dark:border-zinc-700 justify-between items-center p-4'>
					<h1 className='text-2xl font-bold text-black dark:text-white'>
						<Link href='/'>{metadata.title}</Link>
					</h1>
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
				</header>
				{children}
			</body>
		</html>
	);
}
