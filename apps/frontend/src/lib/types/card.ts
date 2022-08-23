import type { ComponentOptions, ElementOptions } from './index';

/* Card */
export type CardOptions = ComponentOptions<CardPropsOptions, CardStylesOverrideOptions>;

export type CardPropsOptions = ElementOptions & {
	outlined?: boolean;
};

export type CardProps = ElementOptions & {
	outlined?: boolean;
};

export type CardStylesOverrideOptions = {
	root?: string;
	outline?: string;
};

/* Card Header */
export type CardHeaderOptions = ComponentOptions<
	CardHeaderPropsOptions,
	CardHeaderStylesOverrideOptions
>;

export type CardHeaderPropsOptions = ElementOptions;

export type CardHeaderProps = ElementOptions;

export type CardHeaderStylesOverrideOptions = {
	root?: string;
};

/* Card Title */
export type CardTitleOptions = ComponentOptions<
	CardTitlePropsOptions,
	CardTitleStyleOverrideOptions
>;

export type CardTitleProps = ElementOptions;

export type CardTitlePropsOptions = ElementOptions;

export type CardTitleStyleOverrideOptions = {
	root?: string;
};

/* Card Action */
export type CardActionOptions = ComponentOptions<CardActionPropsOptions, CardActionOverrideOptions>;

export type CardActionPropsOptions = ElementOptions;

export type CardActionProps = ElementOptions;

export type CardActionOverrideOptions = {
	root?: string;
};

/* Card Content */
export type CardContentOptions = ComponentOptions<
	CardContentPropsOptions,
	CardContentStylesOverrideOptions
>;

export type CardContentPropsOptions = ElementOptions;

export type CardContentProps = ElementOptions;

export type CardContentStylesOverrideOptions = {
	root?: string;
};
