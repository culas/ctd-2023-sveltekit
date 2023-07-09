import type { PageServerLoadEvent } from './$types';
import type { Contributor } from '$lib/contributor/contributor.model';
import { API_URL } from '$env/static/private';

export async function load({ fetch }: PageServerLoadEvent) {
	const res = await fetch(`${API_URL}/contributors`);
	const contributors: Contributor[] = await res.json();
	return { contributors };
}
