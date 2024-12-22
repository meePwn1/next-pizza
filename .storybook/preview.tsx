import '@/app/globals.css'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})
const preview: Preview = {
	parameters: {
		docs: { theme: themes.dark },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		Story => (
			<main className={`${nunito.variable} font-sans antialiased`}>
				<Story />
			</main>
		),
	],
}

export default preview
