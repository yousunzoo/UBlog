import { getPostData } from '@/service/posts';
import React from 'react';

type Props = {
	params: {
		slug: string;
	};
};
async function PostPage({ params: { slug } }: Props) {
	// 1. 전달된 slug를 이용해 서버에서 Post를 가져온다.
	// 2. Post를 이용해 마크다운 뷰어로 렌더링한다.
	const post = await getPostData(slug);
	return (
		<>
			<h1>{post.title}</h1>
			<pre>{post.content}</pre>
		</>
	);
}

export default PostPage;
