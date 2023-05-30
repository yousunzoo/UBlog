import FilterabledPosts from '@/components/FilterabledPosts';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'All Posts',
	description: '개발 관련 블로그 포스트 모음',
};
async function PostsPage() {
	const posts = await getAllPosts();
	const categories = [...new Set(posts.map((post) => post.category))];
	return <FilterabledPosts posts={posts} categories={categories} />;
}

export default PostsPage;
