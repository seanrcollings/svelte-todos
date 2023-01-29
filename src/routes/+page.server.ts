import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export interface Todo {
	id: number;
	description: string;
	done: boolean;
}

let currId = 0;

const todos: Todo[] = [];

export const load = (() => {
	return { todos };
}) satisfies PageServerLoad<{ todos: Todo[] }>;

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const desc = data.get('description') as string;

		if (!desc) {
			return fail(400, { description: desc, error: 'Description cannot be empty' });
		}

		todos.push({
			id: currId++,
			description: desc,
			done: false
		});
	},

	update: async ({ request }) => {
		const data = await request.formData();
		const id = parseInt(data.get('id') as string);
		const done = data.get('done') === 'true';

		const todo = todos.find((t) => t.id == id);
		if (!todo) {
			return fail(400, { error: 'failed to update todo' });
		}

		todo.done = done;
	}
} satisfies Actions;
