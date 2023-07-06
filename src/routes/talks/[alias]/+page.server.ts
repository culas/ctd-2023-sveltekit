import type { Talk } from '$lib/talk/talk.model';
import type { PageServerLoadEvent } from './$types';

export async function load({ fetch, params }: PageServerLoadEvent) {
	const res = await fetch(`http://localhost:3000/items?alias=${params.alias}&_expand=room`);
	const [talk]: Talk[] = await res.json();
	const contributors = Promise.all(
		talk.contributors
			.map((c) => fetch(`http://localhost:3000/contributors/${c}`))
			.map(async (res) => (await res).json())
	);
	return { talk, contributors };
}
