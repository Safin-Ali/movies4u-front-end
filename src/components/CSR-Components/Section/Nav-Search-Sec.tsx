import React from 'react';
import { LuSearch } from 'react-icons/lu';
import { BsGridFill } from 'react-icons/bs';
import { movieGenres } from '@/data/nav-items';
import GenreBtn from '../Button/Genre-Btn';
import useArrExpand from '@/hooks/useArrExpand';
import SeeAllBtn from '../Button/See-All-Btn';

export default function NavSearchSec() {

	const { handleArr, slicedArr,arrExpanded } = useArrExpand({
		arr: Object.values(movieGenres),
		initLeng: 6
	});

	return (
		<div>

			{/* search feild */ }
			<div
				className={ `d-v-center search-feild-container` }
			>
				<div className={ `text-primary-text` }>
					<LuSearch />
				</div>

				<div>
					<input
						type='text'
						className={ `bg-transparent focus:outline-none` }
					/>
				</div>

				<div>
					<BsGridFill />
				</div>
			</div>

			<div
				className={ `my-7` }
			>
				<div className={`d-v-center justify-between`}>
					<h6 className={ `text-sm` }>GENRE</h6>
					<SeeAllBtn
						resFun={() => handleArr()}
					>
						{arrExpanded ? 'Collapse' : 'See all'}
					</SeeAllBtn>
				</div>
			</div>

			<div
				className={ `g-full-center grid-cols-2 gap-2` }
			>
				{
					slicedArr.map((gn, gnKey) => {
						return <GenreBtn key={ gnKey }>{ gn }</GenreBtn>;
					})
				}
			</div>
		</div>
	);
}