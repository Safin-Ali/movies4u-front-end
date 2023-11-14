'use client';
import { leftSideNavItem } from '@/data/nav-items';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function LeftSideNav() {

	const { push } = useRouter();

	const pathName = usePathname().split('/');

	const currNavPath = pathName[0] || pathName[1];

	return (
		<aside
			className={`sidebar-base no-scrollbar`}
		>
			<div
				className={`my-5 px-4`}
			>
				Here My Logo
			</div>
			{
				Object.entries(leftSideNavItem).map((ent, entKey) => {
					return <div
						key={ entKey }
					>
						<div className={`my-2 px-4`}>
							<h3 className={`text-xl uppercase`}>{ ent[0] }</h3>
						</div>

						<div
							className={`pl-4`}
						>
							{
								ent[1].map(({ icon: Icon, label, path, size }, itmKey) => {
									return <div
										key={ itmKey }
										onClick={ () => push(path) }
										className={`
										d-v-center
										l-side-items
										${path === '/'+currNavPath ? 'l-side-items-active' : ''}
										`}
									>

										{/* here will be icon */ }
										<div
											className={`
											${path === '/'+currNavPath ? 'text-primary-red' : ''}`}
										>
											<Icon size={ size } />
										</div>

										<div
											className={`capitalize`}
										>
											{ label }
										</div>
									</div>;
								})
							}
						</div>
					</div>;
				})
			}
		</aside>
	);
}