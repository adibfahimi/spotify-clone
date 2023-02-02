export interface ISong {
	id: string;
	title: string;
	image: string;
	link: string;
	cagorie: string[];
	description: string[];
}

export interface ICategory {
	id: string;
	title: string;
	image: string;
	link: string;
	songs: ISong[];
}
