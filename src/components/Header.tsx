import { ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, ProfileIcon } from './Icons';
import { useState, useEffect } from 'react';

interface IUser {
	name: string;
	image: string | null;
}

function hexWithOpacity(hex: string, opacity: number): string {
	let r: number;
	let g: number;
	let b: number;

	if (opacity > 0.7) opacity = 0.7;

	if (hex.length === 7) {
		r = parseInt(hex.substring(1, 3), 16);
		g = parseInt(hex.substring(3, 5), 16);
		b = parseInt(hex.substring(5, 7), 16);
	} else {
		r = parseInt(hex.substring(1, 2), 16);
		g = parseInt(hex.substring(2, 3), 16);
		b = parseInt(hex.substring(3, 5), 16);
	}

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function Header({ color }: { color: string }) {
	const [backgrounColor, setBackgrounColor] = useState('transparent');
	const [user, setUser] = useState<IUser>({
		name: '',
		image: null,
	});

	useEffect(() => {
		setUser({
			name: 'John Doe',
			image: null,
		});
	}, []);

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackgrounColor(color);
			}
		});
	}

	return (
		<header
			className="op fixed top-0 right-0 z-50 flex h-16 w-full justify-between py-4 px-8 "
			style={{
				width: 'calc(100% - 218px)',
				backgroundColor: hexWithOpacity(backgrounColor, window.scrollY / 100),
			}}
		>
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
		</header>
	);
}
