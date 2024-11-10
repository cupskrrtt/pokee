"use client";

import { useGetItem } from "@/lib/data/item";
import Image from "next/image";

export default function ItemSprite({ name }: { name: string }) {
	const { item, error, loading } = useGetItem(name);
	return (
		<>
			{loading ? (
				<div className="bg-gray-300 rounded-full h-[30px] w-[30px] animate-pulse"></div>
			) : (
				<Image
					src={
						item?.sprites.default == null
							? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mega-pendant.png"
							: item?.sprites.default
					}
					alt={item?.name || "name"}
					width={30}
					height={30}
				/>
			)}
		</>
	);
}
