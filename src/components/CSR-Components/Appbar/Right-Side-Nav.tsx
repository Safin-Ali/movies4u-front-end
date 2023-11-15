'use client';
import React from 'react';
import NavProfileSec from '../Section/Nav-Profile-Sec';
import NavSearchSec from '../Section/Nav-Search-Sec';

export default function RightSideNav() {

	return (
		<aside
			className={ `sidebar-base no-scrollbar px-[6%]` }
		>
			{/* profile info section */ }
			<NavProfileSec
				avatar={''}
				userFullName={'Safin Ali'}
				userEmail={'safin.ali.xx@gmail.com'}
			/>

			{/* genre section */}
			<NavSearchSec/>
		</aside>
	);
}