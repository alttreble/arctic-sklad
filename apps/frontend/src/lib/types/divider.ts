import type { ComponentOptions, ElementOptions } from './index';

export type DividerOptions = ComponentOptions<DividerPropsOptions, DividerStyleOverrideOptions>;

export type DividerPropsOptions = ElementOptions & {
	direction: 'vertical' | 'horizontal';
};

export type DividerProps = ElementOptions & {
	direction: 'vertical' | 'horizontal';
};

export type DividerStyleOverrideOptions = {
	root?: string;
};
