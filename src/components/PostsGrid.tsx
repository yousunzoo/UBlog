import { Post } from '@/service/posts';
import React from 'react';

type Props = { posts: Post[] };
function PostsGrid({ posts }: Props) {
	return (
		<ul>
			{posts.map((post) => (
				<li className='' key={post.path}>
					{post.title}
				</li>
			))}
		</ul>
	);
}

export default PostsGrid;
