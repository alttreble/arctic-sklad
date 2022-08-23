import type { ComponentOptions, ElementOptions } from './index';

export type ContainerOptions = ComponentOptions<ContainerPropsOptions, ContainerStyleOverrideOptions>;

export type ContainerPropsOptions = ElementOptions

export type ContainerProps = ElementOptions

export type ContainerStyleOverrideOptions = {
	root?: string;
};
