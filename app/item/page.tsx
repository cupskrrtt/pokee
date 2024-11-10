import Items from "./_components/items";

export default async function ItemPage() {
	return (
		<section className="container flex flex-col gap-8 mx-auto py-4 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
			<p>Item page</p>
			<Items />
		</section>
	);
}
