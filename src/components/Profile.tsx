import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const hashtags = ['#ISFP', '#높은_적응력', '#새로운_기술_좋아', '#일단_부딪혀'];
function Profile() {
	return (
		<section className='py-10 text-center'>
			<div className='relative mx-auto mb-6 h-[180px] w-[180px]'>
				<Image src='/images/profile.jpg' fill className='rounded-full object-cover' alt='Profile image' />
			</div>
			<h2 className='mb-2 text-2xl font-bold'>yousunzoo</h2>
			<p className='mb-2 italic'>웹 프론트엔드 개발자</p>
			<p className='mb-2 break-keep text-slate-600'>
				어려운 문제를 마주쳐도 포기하지 않고 한 걸음씩 나아가며 성장하기! 😊
			</p>
			<ul className='mb-8'>
				{hashtags.map((hashtag, index) => (
					<li key={index} className='mx-1 inline-block rounded-lg bg-slate-400 px-2 py-1 text-xs text-white'>
						{hashtag}
					</li>
				))}
			</ul>
			<Link className='rounded-xl bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600' href='/contact'>
				Contact Me
			</Link>
		</section>
	);
}

export default Profile;
