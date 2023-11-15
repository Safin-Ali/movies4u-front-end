import LeftSideNav from '@/components/CSR-Components/Appbar/Left-Side-Nav';
import RightSideNav from '@/components/CSR-Components/Appbar/Right-Side-Nav';
import React from 'react';

export default async function Template({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<section
			className={ `grid grid-cols-14` }
		>
			<div
				className={ `col-span-2` }
			>
				<LeftSideNav />
			</div>

			<main
				className={ `col-span-9 text-center` }
			>
				{children}
			</main>

			<div
				className={ `col-span-3` }
			>
				<RightSideNav />
			</div>
		</section>
	);
}