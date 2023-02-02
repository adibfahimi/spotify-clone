import { ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, ProfileIcon } from './Icons';
import { useState, useEffect } from 'react';

interface IUser {
	name: string;
	image: string | null;
}

export default function Header({ color }: { color: string }) {
	const [opacity, setOpacity] = useState<number>(0);
	const [user, setUser] = useState<IUser>({
		name: '',
		image: null,
	});

	useEffect(() => {
		setUser({
			name: 'Adib Fahimi',
			image: null,
		});
	}, []);

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			setOpacity(window.scrollY / 100);
		});
	}

	return (
		<header
			className="op fixed top-0 right-0 z-50 h-16 w-full"
			style={{
				width: 'calc(100% - 218px)',
			}}
		>
			<div
				className=" -z-10 absolute top-0 right-0 h-full w-full"
				style={{
					backgroundColor: color,
					opacity: opacity,
				}}
			></div>
			<div className="flex justify-between py-4 px-8">
				<div className="flex gap-4">
					<button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#000000b3] opacity-60">
						<ChevronRightIcon />
					</button>
					<button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#000000b3] opacity-60">
						<ChevronLeftIcon />
					</button>
				</div>

				<div className="flex gap-6">
					<button className="flex min-h-[32px] items-center justify-center rounded-full border border-[#727272] bg-transparent px-[15px] font-bold">
						Upgrade
					</button>
					<button className="flex h-8 items-center gap-2 rounded-full bg-[#000000b3] p-[2px]">
						<div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#535353]">
							<ProfileIcon />
						</div>
						<span className="font-bold">{user ? user.name : 'Loading...'}</span>
						<div className="mr-1">
							<ChevronDownIcon />
						</div>
					</button>
				</div>
			</div>
		</header>
	);
}
