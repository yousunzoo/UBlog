'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggleBtn from './ThemeToggleBtn';

function Header() {
	const pathname = usePathname();
	return (
		<header className='fixed left-0 top-0 z-10 w-full border-b border-slate-200 bg-white/90 px-6 py-2 dark:border-zinc-700 dark:bg-slate-950/90'>
			<div className='mx-auto flex max-w-screen-2xl items-center justify-between'>
				<Link href='/' className='flex items-center gap-1 text-2xl font-bold text-emerald-700 dark:text-white'>
					<Image src='/images/logo.png' alt='logo' width={50} height={50} />
					<h1>UBlog</h1>
				</Link>
				<div className='flex gap-2'>
					<ThemeToggleBtn />
					<nav>
						<ul className='text-small flex text-slate-500 dark:text-gray-50'>
							<li className={`mx-2 hover:text-emerald-400 ${pathname === '/' && '!text-emerald-400'}`}>
								<Link href='/'>Home</Link>
							</li>
							<li className={`mx-2 hover:text-emerald-400 ${pathname === '/about' && '!text-emerald-400'}`}>
								<Link href='/about'>About</Link>
							</li>
							<li className={`mx-2 hover:text-emerald-400 ${pathname === '/posts' && '!text-emerald-400'}`}>
								<Link href='/posts'>Posts</Link>
							</li>
							<li className={`mx-2 hover:text-emerald-400 ${pathname === '/contact' && '!text-emerald-400'}`}>
								<Link href='/contact'>Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
