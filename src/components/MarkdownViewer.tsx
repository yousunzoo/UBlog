import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function MarkdownViewer({ content }: { content: string }) {
	return (
		<ReactMarkdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm]}>
			{content}
		</ReactMarkdown>
	);
}

export default MarkdownViewer;
