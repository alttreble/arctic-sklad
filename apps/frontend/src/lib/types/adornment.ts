import type { ComponentOptions, ElementOptions } from './index';

export type InputStartAdornmentOptions = ComponentOptions<
	InputStartAdornmentPropsOptions,
	InputStartAdornmentStylesOverrideOptions
>;

export type InputStartAdornmentPropsOptions = ElementOptions;

export type InputStartAdornmentProps = ElementOptions;

export type InputStartAdornmentStylesOverrideOptions = {
	root?: string;
};
