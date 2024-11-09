"use client";

import { itemOptions } from "@/lib/data/item";
import { useSuspenseQuery } from "@tanstack/react-query";
import { setServers } from "dns";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ItemsDto {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

export default function Items() {
	const { data }: { data: ItemsDto } = useSuspenseQuery(itemOptions);
	const [prev, setPrev] = useState(0);
	const [next, setNext] = useState(60);
	const [search, setSearch] = useState("");
	const [res, setRes] = useState(data.results);

	useEffect(() => {
		const filtered = data.results.filter((x) =>
			x.name.toLowerCase().replace(/-/g, " ").includes(search.toLowerCase()),
		);
		setRes(filtered);
		setPrev(0);
		setNext(60);
	}, [search, data.results]);

	return (
		<>
			<div className="flex w-full justify-between">
				<button
					onClick={() => {
						setPrev(prev - 60);
						setNext(next - 60);
					}}
					className="bg-primary-red disabled:bg-gray-300 border-2 border-gray-200 rounded-xl py-2 px-4 font-semibold text-text-inverse"
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
					disabled={next > data.count}
					className="bg-primary-red disabled:bg-gray-300 rounded-xl py-2 px-4 border-2 border-gray-200 font-semibold text-text-inverse"
				>
					Next page
				</button>
			</div>

			{res.length === 0 ? (
				<p>{search} not found</p>
			) : (
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
					{res.slice(prev, next).map((x) => (
						<Link href={`item/${x.name}`}>
							<button className="capitalize text-start">
								{x.name.replace(/-/g, " ")}
							</button>
						</Link>
					))}
				</div>
			)}
		</>
	);
}
