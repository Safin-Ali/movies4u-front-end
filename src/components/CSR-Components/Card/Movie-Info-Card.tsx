'use client';
import { MovieInfoCard } from '@/types/static-type';
import Image from 'next/image';
import React, { useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import { FaStar } from 'react-icons/fa6';
import { movieGenres } from '@/data/nav-items';
import { useRouter } from 'next/navigation';

export default function MovieInfoCard({
	vote,
	id,
	poster_path,
	title,
	genresId
}: MovieInfoCard) {

	const [isHover,setHover] = useState<boolean>(false);

	const handlerCart = () => {
		// cart login
	};

	const {push} = useRouter();

	return (
		<div
			className={ `movie-info-card-cont ${isHover ? 'movie-info-card-overlay' : ''}` }
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>

			{/* header area */}
			<div
				className={ `movie-info-card-cart` }
				onClick={handlerCart}
			>
				<TiPlus size={ 20 } />
			</div>

			{/* banner area */}
			<div
				className={ `movie-info-card-banner` }
				onClick={() => push(`/${id}/${title.toLowerCase()}`)}
			>
				<div>
					<Image
						alt={ `${title} Banner` }
						src={ `https://image.tmdb.org/t/p/w500${poster_path}` }
						width={ 250 }
						height={ 250 }
					/>
				</div>
			</div>

			{/* footer area */}
			<div className={ `movie-info-card-footer d-v-center ${isHover ? 'movie-info-card-enter' : ''}` }>
				<div className={ `d-v-center gap-x-2 z-[10]` }>
					<div className={ `text-yellow-400` }>
						<FaStar size={ 15 } />
					</div>
					<div>
						<span>{ vote }</span>
					</div>
				</div>

				<div>
					<span>
						{
							movieGenres[genresId[0]]
						}
						|
						{
							movieGenres[genresId[1]]
						}
					</span>
				</div>
			</div>

		</div>
	);
}