import { ItemDto } from "@/types/Dto";
import Image from "next/image";

export default async function ItemSprite({ name }: { name: string }) {
	let data = await fetch(`https://pokeapi.co/api/v2/item/${name}`);
	let itemData: ItemDto = await data.json();
	return (
		<Image
			src={itemData.sprites.default}
			alt={itemData.name}
			width={30}
			height={30}
		/>
	);
}
