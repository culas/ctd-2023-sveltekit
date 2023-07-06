export interface Talk {
	_id: string;
	name: string;
	alias: string;
	descriptionHtml: string;
	time: {
		start: string;
		end: string;
	};
	contributors: string[];
	categories: string[];
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
	feedback: [
		{
			rating: string;
			comment: string;
		}
	];
}
