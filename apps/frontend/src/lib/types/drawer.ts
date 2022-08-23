import type { ComponentOptions, ElementOptions } from './index';

export type DrawerOptions = ComponentOptions<DrawerPropsOptions, DrawerStylesOverrideOptions>;

export type DrawerPropsOptions = ElementOptions & {
	variant?: 'permanent' | 'persistent' | 'temporary';
	open?: boolean;
};
export type DrawerProps = ElementOptions & {
	variant?: 'permanent' | 'persistent' | 'temporary';
	open?: boolean;
};

export type DrawerStylesOverrideOptions = {
	root?: string;
};
