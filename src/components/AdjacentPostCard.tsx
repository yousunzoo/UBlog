import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
	post: Post;
	type: 'prev' | 'next';
};
const ICON_CLASS = 'm-4 text-5xl text-yellow-300 transition-all group-hover:text-6xl';
function AdjacentPostCard({ post, type }: Props) {
	const { title, path, description } = post;
	return (
		<Link href={`/posts/${path}`} className='relative max-h-56 w-full bg-black'>
			<Image className='w-full opacity-40' src={`/images/posts/${path}.png`} alt={title} width={150} height={100} />
			<div className='group absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-8 text-white'>
				{type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
				<div className='w-10/12 text-center'>
					<h3 className='mb-6 truncate text-xl font-bold md:text-2xl lg:text-3xl'>{title}</h3>
					<p className='truncate font-bold'>{description}</p>
				</div>
				{type === 'next' && <FaArrowRight className={ICON_CLASS} />}
			</div>
		</Link>
	);
}

export default AdjacentPostCard;
