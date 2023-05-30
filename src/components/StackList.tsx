import React from 'react';

type Props = {
	title: string;
	stacks: string[];
};
function StackList({ title, stacks }: Props) {
	return (
		<div className='mt-10'>
			<h3 className='mb-4 text-center text-xl dark:text-slate-100'>{title}</h3>
			<ul className='flex justify-center gap-4'>
				{stacks.map((stack, index) => (
					<li className='rounded-lg bg-slate-400 px-2 py-[2px] text-sm text-white' key={index}>
						{stack}
					</li>
				))}
			</ul>
		</div>
	);
}

export default StackList;
