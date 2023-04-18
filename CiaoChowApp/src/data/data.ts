export interface Food {
	id: number;
	attributes: {
		Image: { data: [{ attributes: { url: string; } }] },
		Title: string;
		Description: string;
	};
};

