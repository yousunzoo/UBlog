import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';

export default function Home() {
	return (
		<>
			<Profile />
			{/* @ts-expect-error Server Component */}
			<FeaturedPosts />
		</>
	);
}
