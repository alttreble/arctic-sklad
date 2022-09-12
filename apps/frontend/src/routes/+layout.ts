import type { PageLoad } from "./$types";

export const csr = true;

export const load: PageLoad = async ({ url: {pathname} }) => {
	return { pathname };
};
