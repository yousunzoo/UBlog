'use client';
import { Post } from '@/service/posts';
import React, { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
	posts: Post[];
	categories: string[];
};

const ALL_POSTS = 'All Posts';

function FilterabledPosts({ posts, categories }: Props) {
	const [selected, setSelected] = useState(ALL_POSTS);
	const filtered = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);

	return (
		<section className='flex'>
			<PostsGrid posts={filtered} />
			<Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={setSelected} />
		</section>
	);
}

export default FilterabledPosts;
