import { BerryDto, ItemDto } from "@/types/Dto";
import Image from "next/image";

async function getItem(slug: string): Promise<ItemDto> {
	const res = await fetch(`https://pokeapi.co/api/v2/item/${slug}`);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

async function getBerry(slug: string): Promise<BerryDto> {
	const res = await fetch(`https://pokeapi.co/api/v2/berry/${slug}`);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function ItemDetailPage({
	params,
}: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const berrySlug = slug.substring(0, slug.lastIndexOf("-berry"));
	const itemData = await getItem(slug);
	const berryData = await getBerry(berrySlug);

	const [item, berry] = await Promise.all([itemData, berryData]);

	return (
		<div className="container mx-auto py-4 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
			<div className="border flex flex-col gap-2 px-4 py-2 rounded-md bg-gray-100">
				<div className="flex w-full">
					<Image
						src={
							item.sprites.default == null
								? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mega-pendant.png"
								: item?.sprites.default
						}
						alt={item.name}
						width={80}
						height={80}
					/>
					<div className="flex flex-col justify-center items-start w-full">
						<h1 className="font-bold text-xl text-text-primary capitalize">
							{item.name.split("-").join(" ")}
						</h1>
						<div className="flex justify-start gap-2 items-center w-full flex-wrap">
							<p className="text-xs font-semibold bg-primary-yellow text-text-primary py-1 px-2 rounded-xl capitalize">
								Cost: {item.cost}
							</p>
							<p className="text-xs font-semibold bg-primary-yellow text-text-primary py-1 px-2 rounded-xl capitalize">
								Type: {item.category.name}
							</p>
							{item.attributes?.map((x) => (
								<p
									key={x.name}
									className="text-xs font-semibold bg-primary-green py-1 px-2 rounded-xl capitalize"
								>
									{x.name.split("-")[0]}
								</p>
							))}
						</div>
					</div>
				</div>
				<hr className="border-[1px] border-gray-200" />
				<h2 className="font-semibold text-md">Item Description</h2>
				<p className="text-sm">
					{
						item.flavor_text_entries
							.filter((x) => x.language.name === "en")
							.at(-1)?.text
					}
				</p>
				<hr className="border-[1px] border-gray-200" />
				<h2 className="font-semibold text-md text-text-primary">Basic Info</h2>
				<div className="flex flex-col">
					<div className="flex flex-col gap-2">
						<div className="flex flex-col">
							<p className="text-sm">Berry Size</p>
							<p className="text-sm font-semibold">{berry.size}</p>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Smoothness</p>
							<p className="text-sm font-semibold">{berry.smoothness}</p>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Soil Dryness</p>
							<p className="text-sm font-semibold">{berry.soil_dryness}</p>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Growth Time</p>
							<p className="text-sm font-semibold">{berry.growth_time}</p>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Max Harvest</p>
							<p className="text-sm font-semibold">{berry.max_harvest}</p>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Firmness</p>
							<p className="text-sm font-semibold capitalize">
								{berry.firmness.name}
							</p>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Natural Gift Properties</p>
							<div className="flex gap-4">
								<p className="text-sm font-semibold">
									Power: {berry.natural_gift_power}
								</p>
								<p className="capitalize text-sm font-semibold">
									Element: {berry.natural_gift_type.name}
								</p>
							</div>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Fling Effect</p>
							<p className="capitalize text-sm font-semibold">
								{item.fling_effect?.name}
							</p>
						</div>
						<div className="flex flex-col">
							<p className="text-sm">Fling Power</p>
							<p className="text-sm font-semibold">{item.fling_power}</p>
						</div>
					</div>
				</div>
				<hr className="border-[1px] border-gray-200" />
				<h2 className="font-semibold text-md">Flavors</h2>
				{berry.flavors.map((x) => (
					<div key={x.flavor.name} className="flex flex-col gap-2">
						<div className="flex justify-between">
							<p className="capitalize text-sm">{x.flavor.name}</p>
							<p className="capitalize text-sm">{x.potency}</p>
						</div>
						<progress
							value={x.potency}
							max={100}
							className="h-2 bg-gray-400 text-primary-red rounded-full min-w-40"
						/>
					</div>
				))}
				{item.baby_trigger_for === null ? (
					""
				) : (
					<>
						<hr className="border-[1px] border-foreground" />
						<p className="text-text-primary capitalize">
							Baby trigger: {item.baby_trigger_for}
						</p>
					</>
				)}
				<hr className="border-[1px] border-gray-200" />
				<h2 className="font-semibold text-md">Game Indices</h2>
				<div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
					{item.game_indices.map((x, i) => (
						<div
							key={i}
							className="bg-primary-green w-full flex rounded-full py-1 px-2 justify-between"
						>
							<p className="text-xs font-medium capitalize">
								{x.generation.name.split("-").join(" ")}:
							</p>
							<p className="text-xs font-medium">{x.game_index}</p>
						</div>
					))}
				</div>
				<hr className="border-[1px] border-gray-200" />
				<h2 className="font-semibold text-lg">Held by</h2>
				{item.held_by_pokemon.map((x, i) => (
					<div key={i} className="flex flex-col">
						<p className="capitalize font-semibold text-sm">{x.pokemon.name}</p>
						<div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
							{x.version_details.map((y, i) => (
								<div
									key={i}
									className="flex bg-primary-blue text-text-inverse w-full justify-between px-2 py-1 rounded-full"
								>
									<p className="text-xs font-semibold capitalize">
										{y.version.name.split("-").join(" ")}
									</p>
									<p className="text-xs font-semibold">{y.rarity}%</p>
								</div>
							))}
						</div>
					</div>
				))}
				<hr className="border-[1px] border-gray-200" />
				<h2 className="font-semibold text-lg">Other Language</h2>
				<div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
					{item.names.map((x, i) => (
						<div
							key={i}
							className="flex flex-col border-2 w-full px-2 py-1 rounded-lg"
						>
							<p className="text-sm font-bold">{x.language.name}</p>
							<p>{x.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
