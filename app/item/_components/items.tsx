"use client";

import { useGetItems } from "@/lib/data/item";
import Link from "next/link";
import { useEffect, useState } from "react";
import ItemSprite from "./item-sprite";

export default function Items() {
	const { items, error, loading } = useGetItems();
	const [prev, setPrev] = useState(0);
	const [next, setNext] = useState(60);
	const [search, setSearch] = useState("");
	const [res, setRes] = useState(items?.results);

	useEffect(() => {
		const filtered = items?.results.filter((x) =>
			x.name.toLowerCase().replace(/-/g, " ").includes(search.toLowerCase()),
		);
		setRes(filtered);
		setPrev(0);
		setNext(60);
	}, [search, items?.results]);

	return (
		<>
			<div className="flex w-full justify-between">
				<button
					onClick={() => {
						setPrev(prev - 60);
						setNext(next - 60);
					}}
					className="bg-primary-red text-xs disabled:bg-gray-300 border-2 border-gray-200 rounded-xl py-2 px-3 font-semibold text-text-inverse"
					disabled={prev == 0}
				>
					Prev Page
				</button>
				<input
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					type="search"
					className="border-2"
				/>
				<button
					onClick={() => {
						setPrev(prev + 60);
						setNext(next + 60);
					}}
					disabled={next > (items?.count != null ? items.count : 10000)}
					className="bg-primary-red text-xs disabled:bg-gray-300 rounded-xl py-2 px-3 border-2 border-gray-200 font-semibold text-text-inverse"
				>
					Next page
				</button>
			</div>

			{res?.length === 0 ? (
				<div className="flex gap-1">
					<p className="font-bold">{search}</p>
					<p>Not Found!</p>
				</div>
			) : (
				<div className="grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
					{res?.slice(prev, next).map((x, i) => (
						<Link key={i} href={`item/${x.name}`}>
							<div className="flex items-center gap-4">
								<ItemSprite name={x.name} />
								<button className="capitalize">
									{x.name.replace(/-/g, " ")}
								</button>
							</div>
						</Link>
					))}
				</div>
			)}
		</>
	);
}
