import type { Talk } from '$lib/talk/talk.model';
import type { PageServerLoadEvent } from './$types';

export async function load({ fetch }: PageServerLoadEvent) {
	const res = await fetch('http://localhost:3000/items?_expand=room');
	const talks: Talk[] = await res.json();
	return { talks };
}
