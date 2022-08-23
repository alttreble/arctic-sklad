import type { ComponentOptions, ElementOptions } from './index';

/* Filled Input */
export type FilledInputOptions = ComponentOptions<
	FilledInputPropsOptions,
	FilledInputStylesOverrideOptions
>;

export type FilledInputPropsOptions = ElementOptions;

export type FilledInputProps = ElementOptions;

export type FilledInputStylesOverrideOptions = {
	root?: string;
};

/* Outlined Input */
export type OutlinedInputOptions = ComponentOptions<
	OutlinedInputPropsOptions,
	OutlinedInputStylesOverrideOptions
>;

export type OutlinedInputPropsOptions = ElementOptions;

export type OutlinedInputProps = ElementOptions;

export type OutlinedInputStylesOverrideOptions = {
	root?: string;
};

/* Base Input */
export type BaseInputOptions = ComponentOptions<
	BaseInputPropsOptions,
	BaseInputStylesOverrideOptions
>;

export type BaseInputPropsOptions = ElementOptions;

export type BaseInputProps = ElementOptions;

export type BaseInputStylesOverrideOptions = {
	root?: string;
};
