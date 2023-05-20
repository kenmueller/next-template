import pageMetadata from '@/lib/metadata/page'

export const generateMetadata = () =>
	pageMetadata({
		title: 'next-template',
		description: 'next-template',
		previewTitle: 'next-template'
	})

const HomePage = () => (
	<main className="flex flex-col h-full">
		<h1 className="m-auto text-5xl font-black">next-template</h1>
	</main>
)

export default HomePage
