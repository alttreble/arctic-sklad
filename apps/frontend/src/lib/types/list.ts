import type { ComponentOptions, ElementOptions } from './index';

export type ListOptions = ComponentOptions<ListPropsOptions,
	ListStylesOverrideOptions>;

export type ListPropsOptions = ElementOptions;

export type ListStylesOverrideOptions = {
	root?: string;
};

export type ListItemOptions = ComponentOptions<ListItemPropsOptions,
	ListItemStylesOverrideOptions>

export type ListItemPropsOptions = ElementOptions;

export type ListItemStylesOverrideOptions = {
	root?: string;
};
