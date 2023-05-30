import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getAllPosts } from '@/service/posts';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
	const { title, description } = await getPostData(slug);
	return {
		title,
		description,
	};
}

async function PostPage({ params: { slug } }: Props) {
	// 1. 전달된 slug를 이용해 서버에서 Post를 가져온다.
	// 2. Post를 이용해 마크다운 뷰어로 렌더링한다.
	const post = await getPostData(slug);
	const { path, title, next, prev } = post;
	return (
		<article className='m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg'>
			<div className='relative h-[420px] w-full'>
				<Image className='absolute object-cover' fill src={`/images/posts/${path}.png`} alt={title} />
			</div>
			<PostContent post={post} />
			<section className='flex flex-wrap lg:flex-nowrap'>
				{prev && <AdjacentPostCard post={prev} type='prev' />}
				{next && <AdjacentPostCard post={next} type='next' />}
			</section>
		</article>
	);
}

export default PostPage;

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((post) => ({
		slug: post.path,
	}));
}
