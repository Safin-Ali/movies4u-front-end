import { ReactChildren } from '@/types/static-type';
import { TiPlus } from 'react-icons/ti';

export default function GenreBtn({ children }: ReactChildren) {

	const handleGenre = () => {
		// grenre function login
	};

	return (
		<div
			onClick={handleGenre}
			className={ `d-full-center genre-btn` }
		>

			<div
				className={ `capitalize` }
			>
				{ children }
			</div>

			<div>
				<TiPlus />
			</div>

		</div>
	);
}