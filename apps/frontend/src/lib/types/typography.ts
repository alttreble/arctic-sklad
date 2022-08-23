import type { ComponentOptions, ElementOptions } from './index';

export type TypographyOptions = ComponentOptions<TypographyPropsOptions, any>;

export type TypographyPropsOptions = ElementOptions & {
	element?: TypographyElement;
	variant?: TypographyVariant;
};

export type TypographyProps = ElementOptions & {
	element?: TypographyElement;
	variant?: TypographyVariant;
};

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
export type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2';
