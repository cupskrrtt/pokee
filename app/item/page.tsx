import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/react-query/get-query-client";
import { itemOptions } from "@/lib/data/item";
import Items from "./_components/items";

export default async function ItemPage() {
	const queryClient = getQueryClient();

	void queryClient.prefetchQuery(itemOptions);

	return (
		<section className="container flex flex-col gap-8 mx-auto py-4 px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
			<p>Item page</p>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Items />
			</HydrationBoundary>
		</section>
	);
}
