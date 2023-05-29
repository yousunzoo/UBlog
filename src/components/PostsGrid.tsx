import { Post } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';

type Props = { posts: Post[] };
function PostsGrid({ posts }: Props) {
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.path}>
					<PostCard post={post} />
				</li>
			))}
		</ul>
	);
}

export default PostsGrid;
