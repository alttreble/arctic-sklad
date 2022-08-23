/* Paper */
import type { ComponentOptions, ElementOptions, Elevation } from './index';

export type PaperOptions = ComponentOptions<PaperPropsOptions, PaperStylesOverrideOptions>;

export type PaperPropsOptions = ElementOptions & {
	elevation?: Elevation;
};

export type PaperProps = ElementOptions & {
	elevation?: Elevation;
};

export type PaperStylesOverrideOptions = {
	root?: string;
};
