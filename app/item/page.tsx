import Link from "next/link";
import Image from "next/image";

interface ItemsDto {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}
export default async function ItemPage() {
	const data = await fetch(
		"https://pokeapi.co/api/v2/item/?offset=0&limit=10000",
	);
	const items: ItemsDto = await data.json();

	return (
		<section className="container flex flex-col gap-8 mx-auto py-4 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
			<p>Item page</p>
			{items.results.map((x) => (
				<Link key={x.url} href={`item/${x.name}`}>
					<button className="flex border-2 w-full">
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${x.name}.png`}
							alt={x.name}
							width={30}
							height={30}
						/>
						{x.name}
					</button>
				</Link>
			))}
		</section>
	);
}
