import FilterabledPosts from '@/components/FilterabledPosts';
import { getAllPosts } from '@/service/posts';

async function PostsPage() {
	const posts = await getAllPosts();
	const categories = [...new Set(posts.map((post) => post.category))];
	return <FilterabledPosts posts={posts} categories={categories} />;
}

export default PostsPage;
