import Image from "next/image";
import Link from "next/link";

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
		<section className="container flex flex-col gap-4 mx-auto py-4 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
			<h1 className="text-2xl font-bold text-center">List of Berry</h1>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
				{berries.results.map((berry) => (
					<Link key={berry.url} href={`berry/${berry.name}`}>
						<button className="flex border-2 w-full">
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.name}-berry.png`}
								alt={berry.name}
								width={30}
								height={30}
							/>
							{berry.name}
						</button>
					</Link>
				))}
			</div>
		</section>
	);
}
