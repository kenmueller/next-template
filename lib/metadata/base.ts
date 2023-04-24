import { Metadata } from 'next'

import favicon from '@/assets/favicon.png'
import getUrl from '@/lib/getUrl'

const baseMetadata = (): Metadata => {
	const url = getUrl()

	return {
		metadataBase: new URL(url.origin),
		applicationName: 'next-template',
		authors: [{ name: 'next-template', url: url.origin }],
		publisher: 'next-template',
		creator: 'next-template',
		themeColor: 'white',
		manifest: '/manifest.webmanifest',
		icons: favicon.src
	}
}

export default baseMetadata
