import type { PageServerLoadEvent } from './$types';

export async function load({ fetch }: PageServerLoadEvent) {
	const res = await fetch('http://localhost:3000/items');
	const talks = res.json();
	return { talks };
}
