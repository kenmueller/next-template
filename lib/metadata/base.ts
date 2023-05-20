import { Metadata } from 'next'

import favicon from '@/assets/favicon.png'
import ORIGIN from '@/lib/origin'

const baseMetadata: Metadata = {
	metadataBase: ORIGIN,
	applicationName: 'next-template',
	authors: [{ name: 'next-template', url: ORIGIN }],
	publisher: 'next-template',
	creator: 'next-template',
	themeColor: 'white',
	manifest: '/manifest.webmanifest',
	icons: favicon.src
}

export default baseMetadata
