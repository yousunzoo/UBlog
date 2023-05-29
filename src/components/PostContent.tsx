import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';

function PostContent({ post }: { post: PostData }) {
	const { title, description, date, content } = post;
	return (
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
	);
}

export default PostContent;
