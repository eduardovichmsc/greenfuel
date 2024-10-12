export interface MindetType {
	id: number;
	title: string;
	body?: string;
}

export interface LinkType {
	href?: string;
	title: string;
}

export interface FooterLinkType extends LinkType {
	sub?: LinkType[];
}

export interface NewsType {
	id: number;
	title: string;
	body: string;
}
