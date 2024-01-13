import { apiAxiosIns } from '@/services/axios';
import MovieInfoCard from '@/components/CSR-Components/Card/Movie-Info-Card';

export default async function Home() {
	const popularMovies = (await apiAxiosIns.get(`movies/?q=trending/movie/week?language=en-US`)).data;

	return (
		<section
			className={ `overflow-y-scroll h-screen` }
		>
			<div
				className={`g-h-center grid-cols-4 gap-3`}
			>

				{
					(popularMovies.results as any[]).map((result) => {
						return <MovieInfoCard
							key={ result.id }
							id={ result.id }
							vote={ result.vote_average.toFixed(1) }
							poster_path={ result.poster_path }
							title={ result.title }
							genresId={result.genre_ids.slice(0,2)}
						/>;
					})
				}
			</div>
		</section>
	);
}
