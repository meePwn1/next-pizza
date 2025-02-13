import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Pizza',
	description: 'Generated by create next app',
}

const nunito = Nunito({
	display: 'swap',
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-nunito',
	subsets: ['cyrillic'],
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${nunito.variable} font-sans antialiased`}>{children}</body>
		</html>
	)
}
