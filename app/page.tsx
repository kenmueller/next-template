if (!process.env.NEXT_PUBLIC_ORIGIN)
	throw new Error('Missing NEXT_PUBLIC_ORIGIN')

import preview from '@/assets/preview.jpg'

import styles from './page.module.scss'

const url = process.env.NEXT_PUBLIC_ORIGIN
const title = 'next-template'
const description = 'next-template'

export const metadata = {
	alternates: { canonical: url },
	title,
	description,
	openGraph: {
		type: 'website',
		title,
		description,
		siteName: 'next-template',
		locale: 'en_US',
		url,
		images: preview,
		countryName: 'United States'
	},
	twitter: {
		card: 'summary_large_image',
		site: '@next-template',
		creator: '@next-template',
		title,
		description,
		images: preview
	}
}

const HomePage = () => (
	<main className={styles.root}>
		<h1 className={styles.title}>next-template</h1>
	</main>
)

export default HomePage
