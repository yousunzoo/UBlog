import React from 'react';

type Props = {
	categories: string[];
	selected: string;
	onClick: (category: string) => void;
};
function Categories({ categories, selected, onClick }: Props) {
	return (
		<section className='p-4 text-center'>
			<h2>카테고리</h2>
			<ul>
				{categories.map((category) => (
					<li
						key={category}
						className={`${selected === category ? 'font-bold' : ''}`}
						onClick={() => onClick(category)}>
						{category}
					</li>
				))}
			</ul>
		</section>
	);
}

export default Categories;
