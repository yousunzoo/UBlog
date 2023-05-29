import React from 'react';

type Props = {
	categories: string[];
	selected: string;
	onClick: (category: string) => void;
};
function Categories({ categories, selected, onClick }: Props) {
	return (
		<section className='p-4 text-center'>
			<h2 className='mb-2 border-b border-emerald-500 pb-2 text-lg font-bold'>카테고리</h2>
			<ul>
				{categories.map((category) => (
					<li
						key={category}
						className={`cursor-pointer hover:text-emerald-500 ${selected === category && 'text-emerald-600'}`}
						onClick={() => onClick(category)}>
						{category}
					</li>
				))}
			</ul>
		</section>
	);
}

export default Categories;
