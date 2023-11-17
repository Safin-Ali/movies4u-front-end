import { SideNavOption } from '@/types/static-type';
import { IoSettingsSharp, IoHome } from 'react-icons/io5';
import { FaDownload } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { MdOutlineHistory } from 'react-icons/md';
import { BsHourglassSplit, BsFire, BsPeopleFill, BsFillBookmarkFill, BsSuitHeartFill } from 'react-icons/bs';

// this items would be used in sidenav element
export const leftSideNavItem: SideNavOption = {
	menu: [
		{
			label: 'home',
			path: '/',
			icon: IoHome,
			size: 19
		},
		{
			label: 'discovery',
			path: '/discovery',
			icon: BsFire,
			size: 19
		},
		{
			label: 'artist',
			path: '/artist',
			icon: BsPeopleFill,
			size: 19
		},
		{
			label: 'coming soon',
			path: '/comingsoon',
			icon: BsHourglassSplit,
			size: 19
		},
	],
	library: [
		{
			label: 'recent',
			path: '/recent',
			icon: MdOutlineHistory,
			size: 23
		},
		{
			label: 'saved for later',
			path: '/watchlater',
			icon: BsFillBookmarkFill,
			size: 18
		},
		{
			label: 'favourite',
			path: '/favourite',
			icon: BsSuitHeartFill,
			size: 18
		},
		{
			label: 'downloaded',
			path: '/download',
			icon: FaDownload,
			size: 18
		},
	],
	general: [
		{
			label: 'setting',
			path: '/setting',
			icon: IoSettingsSharp,
			size: 19
		},
		{
			label: 'FAQ',
			path: '/faq',
			icon: AiFillQuestionCircle,
			size: 19
		}
	]
};

// top navlinks items
export const topNavItems = [
	{
		label: 'all',
		pathL: '/'
	},
	{
		label: 'movies',
		pathL: '/movies'
	},
	{
		label: 'series',
		pathL: '/series'
	},
	{
		label: 'TV show',
		pathL: '/tvshow'
	},
	{
		label: 'animation',
		pathL: '/animation'
	},
];

// tv show genre collection
export const tvShowGenres = {
	10759: 'Action & Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	10762: 'Kids',
	9648: 'Mystery',
	10763: 'News',
	10764: 'Reality',
	10765: 'Sci-Fi & Fantasy',
	10766: 'Soap',
	10767: 'Talk',
	10768: 'War & Politics',
	37: 'Western'
};

// movie genre collection
export const movieGenres = {
	28: 'Action',
	12: 'Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	14: 'Fantasy',
	36: 'History',
	27: 'Horror',
	9648: 'Mystery',
	10749: 'Romance',
	878: 'S Fiction',
	10770: 'TV Movie',
	53: 'Thriller',
	10752: 'War',
	37: 'Western'
};