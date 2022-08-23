import type { ComponentOptions, ElementOptions } from './index';

export type StackOptions = ComponentOptions<StackPropsOptions, StackStylesOverrideOptions>;

export type StackPropsOptions = ElementOptions & {
	direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
	gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export type StackProps = ElementOptions & {
	direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
	gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export type StackStylesOverrideOptions = {
	root?: string;
};
