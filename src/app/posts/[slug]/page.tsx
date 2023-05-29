import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';

type Props = {
	params: {
		slug: string;
	};
};
async function PostPage({ params: { slug } }: Props) {
	// 1. 전달된 slug를 이용해 서버에서 Post를 가져온다.
	// 2. Post를 이용해 마크다운 뷰어로 렌더링한다.
	const { title, description, date, path, content } = await getPostData(slug);
	return (
		<article className='m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg'>
			<div className='relative h-[420px] w-full'>
				<Image className='absolute object-cover' fill src={`/images/posts/${path}.png`} alt={title} />
			</div>
			<section className='flex flex-col p-4'>
				<div className='mb-6 flex items-center self-end text-emerald-700'>
					<AiTwotoneCalendar />
					<p className='ml-2 text-sm'>{date.toString()}</p>
				</div>
				<h1 className='mb-6 text-4xl font-bold'>{title}</h1>
				<p className='text-lg'>{description}</p>
				<div className='mb-12 mt-8 w-44 border-2 border-emerald-600'></div>
				<MarkdownViewer content={content} />
			</section>
		</article>
	);
}

export default PostPage;
