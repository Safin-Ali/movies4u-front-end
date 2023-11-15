import { ReactChildren } from '@/types/static-type';
import React from 'react';

export default function TextSelect({ children }: ReactChildren) {

	const handleSpanText = (event: React.MouseEvent<HTMLSpanElement>) => {
		const selection = getSelection();
		if (selection) {
			const textNode = event.currentTarget.childNodes[0];
			if (textNode.nodeType === Node.TEXT_NODE) {
				const range = document.createRange();
				range.selectNode(textNode);
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	};

	return (
		<span
			onDoubleClick={ handleSpanText }
		>{ children }
		</span>
	);
}