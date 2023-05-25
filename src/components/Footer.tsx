import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className='m-4 mx-auto flex w-[98%] max-w-screen-2xl items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-800 dark:bg-slate-800'>
			<span className='text-sm text-gray-500 dark:text-gray-400'>© 2023 UBlog. All Rights Reserved.</span>
			<nav>
				<ul className='mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400'>
					<li className='mx-2 hover:text-emerald-400'>
						<Link href='https://github.com/yousunzoo'>Github</Link>
					</li>
					<li className='mx-2 hover:text-emerald-400'>
						<Link href='/contact'>Contact</Link>
					</li>
					<li className='mx-2 hover:text-emerald-400'>
						<Link href='https://flaxen-cornucopia-9a5.notion.site/d12b69e17012484489744f52636f3d2c'>Resume</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
