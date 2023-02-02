import { PlayIcon } from './Icons';
import { ISong } from '../types';

export const Card = ({ title, image, link, description }: ISong) => (
	<div className="group flex w-full cursor-pointer flex-col justify-center rounded  bg-[#181818] p-4 hover:bg-[#282828]">
		<div className="relative mb-4">
			<img draggable="false" loading="lazy" src={image} alt="" className="h-full w-full rounded " />
			<div className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[#1ed760] text-black group-hover:visible group-hover:flex">
				<PlayIcon />
			</div>
		</div>
		<div className="flex flex-col gap-1 ">
			<a className="text-base font-bold">{title.length > 25 ? title.slice(0, 25) + '...' : title}</a>
			<div className="text-sm  text-[#a7a7a7] ">
				{description.toString().replace(/,/g, ' ').length > 49 ? description : description.slice(0, 49) + '...'}
			</div>
		</div>
	</div>
);

export const LoadingCart = () => (
	<div className="group flex w-full cursor-pointer flex-col justify-center rounded  bg-[#181818] p-4 hover:bg-[#282828]">
		<div className="relative mb-4">
			<div className="h-[160px] w-[160px] rounded bg-[#3e3e3e] animate-pulse "></div>
		</div>
		<div className="flex flex-col gap-1 ">
			<div className="bg-[#3e3e3e] w-12 rounded-sm animate-pulse"></div>
			<div className="bg-[#3e3e3e] w-full rounded-sm animate-pulse h-2"></div>
		</div>
	</div>
);
