'use client';
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

function MarkdownViewer({ content }: { content: string }) {
	return (
		<ReactMarkdown
			className='prose max-w-none'
			remarkPlugins={[remarkGfm]}
			components={{
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || '');
					return !inline && match ? (
						<SyntaxHighlighter language={match[1]} PreTag='div' {...props} style={materialDark}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props} />
					);
				},
				img: (image) => (
					<Image
						className='max-h-60 w-full object-cover'
						src={image.src || ''}
						alt={image.alt || ''}
						width={500}
						height={300}
					/>
				),
			}}>
			{content}
		</ReactMarkdown>
	);
}

export default MarkdownViewer;
