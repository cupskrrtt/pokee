import { ItemDto } from "@/types/Dto";
import useSWR from "swr";

interface ItemsDto {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useGetItem(name: string) {
	const { data, error, isLoading } = useSWR<ItemDto>(
		`https://pokeapi.co/api/v2/item/${name}`,
		fetcher,
	);

	return {
		item: data,
		error,
		loading: isLoading,
	};
}

export function useGetItems() {
	const { data, error, isLoading } = useSWR<ItemsDto>(
		"https://pokeapi.co/api/v2/item/?offset=0&limit=10000",
		fetcher,
	);

	return {
		items: data,
		error,
		loading: isLoading,
	};
}
