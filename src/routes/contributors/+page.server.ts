import type { PageServerLoadEvent } from './$types';
import type { Contributor } from '$lib/contributor/contributor.model';

export async function load({ fetch }: PageServerLoadEvent) {
	const res = await fetch('http://localhost:3000/contributors');
	const contributors: Contributor[] = await res.json();
	return { contributors };
}
