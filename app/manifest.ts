import { MetadataRoute } from 'next'

import maskableImage from '@/assets/maskable.png'

export const dynamic = 'force-dynamic'

const manifest = (): MetadataRoute.Manifest => ({
	dir: 'ltr',
	lang: 'en-US',
	scope: '/',
	start_url: '/',
	name: 'next-template',
	short_name: 'next-template',
	description: 'next-template',
	display: 'standalone',
	theme_color: 'white',
	background_color: 'white',
	categories: ['next-template', 'next-template'],
	icons: [
		{
			src: maskableImage.src,
			sizes: '512x512',
			purpose: 'maskable'
		},
		{
			src: maskableImage.src,
			sizes: '512x512',
			purpose: 'any'
		}
	]
})

export default manifest
