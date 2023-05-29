import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { post: Post };
function PostCard({ post }: Props) {
	const { title, path, description, date, category } = post;
	return (
		<Link href={`/posts/${path}`}>
			<Image src={`/images/posts/${path}.png`} alt={title} width={300} height={200} />
			<div>
				<time>{date.toString()}</time>
				<h3>{title}</h3>
				<p>{description}</p>
				<span>{category}</span>
			</div>
		</Link>
	);
}

export default PostCard;
