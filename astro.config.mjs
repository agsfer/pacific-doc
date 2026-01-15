// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	site: 'https://agsfer.github.io',
  	base: '/',
	integrations: [
		starlight({
			title: 'Pacific Ai Documentation',
			logo: {
				src: './src/assets/img/logo_1.svg',
				replacesTitle: true,
			},
			      customCss: [
				'./src/assets/css/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			components: {
				Header: './src/components/Header.astro',
				Hero: './src/components/Hero.astro',

			},
		}),
	],
});