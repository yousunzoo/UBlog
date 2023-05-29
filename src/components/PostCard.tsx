import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { post: Post };
function PostCard({ post }: Props) {
	const { title, path, description, date, category } = post;
	return (
		<Link href={`/posts/${path}`}>
			<article className='overflow-hidden rounded-md shadow-md hover:shadow-xl'>
				<div className='relative h-[200px] w-full'>
					<Image className='object-cover' src={`/images/posts/${path}.png`} alt={title} fill />
					<span className='absolute left-4 top-2 my-2 rounded-xl bg-green-500 px-3 py-1 text-sm text-white'>
						{category}
					</span>
				</div>
				<div className='flex flex-col items-center p-4'>
					<time className='self-end'>{date.toString()}</time>
					<h3 className='text-lg font-bold'>{title}</h3>
					<p className='w-full truncate text-center'>{description}</p>
				</div>
			</article>
		</Link>
	);
}

export default PostCard;
