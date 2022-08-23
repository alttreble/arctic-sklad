import type { ComponentOptions, ElementOptions } from './index';

export type FormLabelOptions = ComponentOptions<
	FormLabelPropsOptions,
	FormLabelStylesOverrideOptions
>;
export type FormControlOptions = ComponentOptions<
	FormControlPropsOptions,
	FormControlOverrideOptions
>;

export type FormLabelPropsOptions = ElementOptions;

export type FormLabelProps = ElementOptions;

export type FormLabelStylesOverrideOptions = {
	root?: string;
};

export type FormControlPropsOptions = ElementOptions;

export type FormControlProps = ElementOptions;

export type FormControlOverrideOptions = {
	root?: string;
};
