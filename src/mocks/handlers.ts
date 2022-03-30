import { rest } from 'msw';
import { API_URL } from '../axios';
import { server } from './server';

const fallback = [
	rest.get('*', (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
	}),
	rest.post('*', (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
	}),
	rest.put('*', (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
	}),
	rest.patch('*', (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
	}),
	rest.delete('*', (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
	}),
];

export const handlers = [
	rest.get(`${API_URL}/some-api`, (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ title: 'Test API' }));
	}),
	...fallback,
];

/**
 * @description a function for rejecting a specific endpoint
 * @param url - path to the URL that we want to reject
 */
export const rejectHandler = (url: string): void => {
	server.use(
		rest.get(`${API_URL}${url}`, (_req, res, ctx) => {
			return res(ctx.status(500));
		}),
	);
};
