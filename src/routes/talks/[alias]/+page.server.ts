import type { Talk } from '$lib/talk/talk.model';
import type { Actions, PageServerLoadEvent } from './$types';
import type { Feedback } from '$lib/feedback/feedback.model';

export async function load({ fetch, params }: PageServerLoadEvent) {
	const [talk]: Talk[] = await fetch(
		`http://localhost:3000/items?alias=${params.alias}&_expand=room`
	).then(async (r) => await r.json());
	const feedbacks: Feedback[] = await fetch(
		`http://localhost:3000/feedbacks?itemAlias=${params.alias}`
	).then(async (r) => await r.json());
	const contributors = Promise.all(
		talk.contributors
			.map((c) => fetch(`http://localhost:3000/contributors/${c}`))
			.map(async (res) => (await res).json())
	);
	return { talk, contributors, feedbacks };
}

export const actions: Actions = {
	default: async ({ fetch, params, request }) => {
		const formData = await request.formData();
		const comment = formData.get('comment');
		const rating = formData.get('rating');
		let body = JSON.stringify({ itemAlias: params.alias, rating, comment });
		await fetch(`http://localhost:3000/feedbacks`, {
			method: 'POST',
			body,
			headers: new Headers({ 'Content-Type': 'application/json' })
		});
	}
};
