import { Metadata } from 'next'

import getUrl from '@/lib/getUrl'

const pageMetadata = ({
	title,
	description,
	image
}: {
	title: string
	description: string
	image: string
}): Metadata => {
	const fullUrl = getUrl()
	const url = new URL(fullUrl.pathname, fullUrl.origin).href

	return {
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
			images: image,
			countryName: 'United States'
		},
		twitter: {
			card: 'summary_large_image',
			site: '@next-template',
			creator: '@next-template',
			title,
			description,
			images: image
		}
	}
}

export default pageMetadata
