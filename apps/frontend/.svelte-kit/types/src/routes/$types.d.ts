import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}

export type Errors = undefined;
export type PageData = Omit<Record<never, never>, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.js').load>>>;
export type PageLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Load<RouteParams, null, Record<never, never>, OutputData>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageServerData = null;