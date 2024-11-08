import Link from "next/link";

export default function Home() {
	return (
		<section className="container flex flex-col gap-8 mx-auto py-4 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold text-center">Welcome to Pokee</h1>
				<p className="text-sm text-center">
					Explore the vast world of Pokemon, learn about different type of
					species, regions, items, and many more
				</p>
			</div>
			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-bold text-center">Check This Out!</h2>
				<div>
					<Link href={"berry"}>
						<button className="flex items-center bg-secondary-brown rounded-md px-2 py-1 text-text-inverse font-semibold tracking-wider">
							Berries
						</button>
					</Link>
					<Link href={"item"}>
						<button className="flex items-center bg-secondary-brown rounded-md px-2 py-1 text-text-inverse font-semibold tracking-wider">
							Items
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
