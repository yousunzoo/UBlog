import React from 'react';
import PostsGrid from './PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

async function FeaturedPosts() {
	const posts = await getFeaturedPosts();

	// 2. 모든 포스트 데이터 보여주기
	return (
		<section>
			<h2 className='text-2xl'>Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	);
}

export default FeaturedPosts;
