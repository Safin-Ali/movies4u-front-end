import React from 'react';

export default function template ({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<h1>
			i am template
			{children}
		</h1>
	);
}