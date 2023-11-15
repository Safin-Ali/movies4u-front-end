import React from 'react';
import TextSelect from '../Selector/Text-Select';
import { RxCaretDown } from 'react-icons/rx';
import { ProfileInfoNavSec } from '@/types/static-type';

export default function NavProfileSec({
	avatar,
	userEmail,
	userFullName
}:ProfileInfoNavSec) {

	const handleSignOut = () => {
		// here will be cookie removing login
	};

	return (
		<div
			className={ `d-full-center r-side-nav-prfl-sec` }
		>
			{/* avater */ }
			<div
				className={ `w-10 h-10 bg-primary-red rounded-full` }
			>

			</div>

			{/* name and email*/ }
			<div
			>
				<div>
					<div
						className={ `text-primary-text` }
					>
						<TextSelect>{userFullName}</TextSelect>
					</div>
					<div><TextSelect>{userEmail}</TextSelect></div>
				</div>
			</div>

			<div
				className={ `cursor-pointer` }
			>
				<RxCaretDown size={ 25 } />
			</div>

		</div>
	);
}