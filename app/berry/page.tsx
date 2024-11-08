import Image from "next/image";
import Link from "next/link";
import * as Sprite from "pokemon-sprites/sprites/items/cheri-berry.png";

interface BerriesResultDto {
	name: string;
	url: string;
}

interface BerriesDto {
	count: number;
	next: string | null;
	previous: string | null;
	results: BerriesResultDto[];
}
export default async function BerryPage() {
	const data = await fetch(
		"https://pokeapi.co/api/v2/berry/?offset=0&limit=10000",
	);
	const berries: BerriesDto = await data.json();

	return (
		<div className="flex flex-col">
			{berries.results.map((berry) => (
				<Link key={berry.url} href={`berry/${berry.name}`}>
					{berry.name}
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.name}-berry.png`}
						alt={berry.name}
						width={50}
						height={50}
					/>
				</Link>
			))}
		</div>
	);
}
