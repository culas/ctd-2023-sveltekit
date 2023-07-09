import { API_URL } from '$env/static/private';
import type { Talk } from '$lib/talk/talk.model';
import type { LayoutServerLoadEvent } from './$types';

export async function load({ fetch }: LayoutServerLoadEvent) {
	const res = await fetch(`${API_URL}/items?_expand=room`);
	const talks: Talk[] = await res.json();
	return { talks };
}
