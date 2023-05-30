import React from 'react';
import StackList from './StackList';

const techStacks = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'];
const libraries = ['React Router', 'Redux', 'Redux Query', 'Zustand', 'Styled-Components', 'Axios'];
const tools = ['Git', 'Github', 'Visual Studio Code', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop'];
function MyStacks() {
	return (
		<section>
			<div className='mx-auto mb-12 mt-6 h-1 w-20 bg-emerald-500'></div>
			<h2 className='text-center text-2xl dark:text-white'>My Stacks</h2>
			<StackList title='✨Tech Stacks✨' stacks={techStacks} />
			<StackList title='📚Libraries📚' stacks={libraries} />
			<StackList title='🛠️Tools🛠️' stacks={tools} />
		</section>
	);
}

export default MyStacks;
