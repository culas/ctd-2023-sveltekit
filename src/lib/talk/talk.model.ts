export interface Talk {
	name: string;
	alias: string;
	descriptionHtml: string;
	time: {
		start: string;
		end: string;
	};
	contributors: string[];
	room: {
		name: string;
	};
	teaser?: {
		sizes: {
			preview: string;
			small: string;
			original: string;
		};
	};
}
