import { useEffect, useState } from 'react';
import { ICategory } from '../types';
import { Card, LoadingCart } from '../components/Card';
import { List, LoadingList } from '../components/List';
import data from '../../data.json';

const lists = [
	{
		title: 'INTERWORLD',
		image: 'https://i.scdn.co/image/ab6761610000e5eb55fd982e9c71e695fae1d54f',
	},
	{
		title: 'Liked Songs',
		image: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
	},
	{
		title: 'GOODNIGHT LOVELL',
		image: 'https://i.scdn.co/image/ab67616d0000b273cd2918bf572ce9515646b46e',
	},
	{
		title: 'Night Lovell',
		image: 'https://i.scdn.co/image/ab6761610000e5ebe9d55242d13e8a1208f168c2',
	},
	{
		title: 'INTERWORLD Mix',
		image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/5hKGLu4Ik88FzWcTPhWNTN/en/default',
	},
	{
		title: 'METAMORPHOSIS',
		image: 'https://i.scdn.co/image/ab67616d0000b273b852a616ae3a49a1f6b0f16e',
	},
];

const Discover = ({ color }: { color: string }) => {
	const [sections, setSections] = useState<ICategory[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const hour = new Date().getHours();

	useEffect(() => {
		setSections(data as ICategory[]);
		setLoading(false);
	}, [0]);

	return (
		<main className="relative z-0 ml-[218px] overflow-y-auto pt-16 pb-[118px]">
			<div
				className={`absolute -z-20 -mt-16 h-[332px] w-full opacity-50`}
				style={{
					background: `linear-gradient(180deg, ${color} 0%, rgb(9 208 148 / 0) 100%)`,
				}}
			></div>
			<div className="grid max-w-[1955px]  gap-6 px-8 pt-6">
				<section className="mb-4 flex min-h-[200px] flex-col">
					<div>
						<h2 className="text-[32px] text-gray-200">
							Good{' '}
							{hour >= 6 && hour < 12
								? 'morning'
								: hour >= 12 && hour < 18
								? 'afternoon'
								: hour >= 18 && hour < 24
								? 'evening'
								: 'night'}
						</h2>
					</div>
					<div className="mt-4  grid gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
						{!loading && lists.map((item, index: number) => <List key={index} {...item} />)}
						{loading && [1, 2, 3, 4, 5, 6].map((_: number, index: number) => <LoadingList key={index} />)}
					</div>
				</section>
				{!loading &&
					sections.map((section, index: number) => (
						<section key={index} className="mb-4 flex min-h-[200px] flex-col bg-transparent">
							<h2 className="mb-4 font-[CircularSpTitle] text-2xl font-bold">
								<a draggable="false">{section.title}</a>
							</h2>
							<div className="grid h-[300px] grid-cols-2 gap-4 overflow-hidden overflow-y-hidden md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8">
								{section.songs.slice(0, 8).map((song, index2: number) => (
									<Card key={index2} {...song} />
								))}
							</div>
						</section>
					))}

				{loading &&
					[1, 2, 3, 4].map((_: number, index: number) => (
						<section key={index} className="mb-4 flex min-h-[200px] flex-col bg-transparent">
							<h2 className="mb-4 font-[CircularSpTitle] text-2xl font-bold">
								<a draggable="false"></a>
							</h2>
							<div className="grid h-[300px] grid-cols-2   gap-4 overflow-hidden overflow-y-hidden md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8">
								{[1, 2, 3, 4, 5, 6, 8].map((__, index2: number) => (
									<LoadingCart key={index2} />
								))}
							</div>
						</section>
					))}
			</div>
		</main>
	);
};

export default Discover;
