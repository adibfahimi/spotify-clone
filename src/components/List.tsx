import { PlayIcon } from './Icons';

export const List = ({ image, title }: { image: string; title: string }) => (
	<div className="group relative flex h-20  cursor-pointer items-center gap-4 overflow-hidden rounded bg-[#ffffff1a] hover:bg-[#ffffff33] ">
		<div className="relative h-20 w-20">
			<img
				draggable="false"
				loading="lazy"
				src={image}
				alt=""
				width={80}
				height={80}
				className="absolute top-0 left-0 z-30 h-full w-full object-cover "
			/>
		</div>
		<a draggable="false" title={title} className="text-base font-bold text-white">
			<p>{title}</p>
		</a>

		<div className="absolute  right-4 hidden h-12 w-12 items-center justify-center rounded-full bg-[#1ed760] text-black group-hover:visible group-hover:flex">
			<PlayIcon />
		</div>
	</div>
);

export const LoadingList = () => (
	<div className="bg-[#1b1b1b] w-full animate-pulse group relative flex h-20  cursor-pointer items-center gap-4 overflow-hidden rounded bg-[#ffffff1a] hover:bg-[#ffffff33] ">
		<div className="relative h-20 w-20">
			<div className="bg-[#3e3e3e] animate-pulse absolute top-0 left-0 z-30 h-[80px] m-2  w-[80px] object-cover "></div>
		</div>
		<a draggable="false" title="" className="text-base font-bold text-white">
			<p className="bg-[#3e3e3e] w-12 rounded-sm animate-pulse"></p>
		</a>
	</div>
);
