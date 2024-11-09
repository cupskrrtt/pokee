import { queryOptions } from "@tanstack/react-query";

interface ItemsDto {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

export const itemOptions = queryOptions({
	queryKey: ["items"],
	queryFn: async () => {
		const response = await fetch(
			"https://pokeapi.co/api/v2/item/?offset=0&limit=10000",
		);

		return response.json();
	},
});
