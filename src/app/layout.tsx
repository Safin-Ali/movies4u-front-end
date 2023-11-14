import type { Metadata } from 'next';
import { Averia_Libre } from 'next/font/google';
import '../style/global.css';

const averia = Averia_Libre({
	weight:['300','400','700'],
	fallback:['system-ui', 'arial'],
	subsets:['latin']
});

export const metadata: Metadata = {
	title: 'Home',
	description: 'movies4u for online movie streaming and download platform',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={ averia.className }>
				{ children }
			</body>
		</html>
	);
}
