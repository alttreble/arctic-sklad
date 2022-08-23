import type { ComponentOptions, ElementOptions } from './index';

export type ButtonOptions = ComponentOptions<ButtonPropsOptions, ButtonStylesOverrideOptions>;

export type ButtonPropsOptions = ElementOptions & {
	variant?: 'text' | 'contained' | 'outlined';
	color?: 'accent' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'inherit';
	size?: 'small' | 'medium' | 'large';
};

export type ButtonProps = ElementOptions & {
	variant?: 'text' | 'contained' | 'outlined';
	color?: 'accent' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'inherit';
	size?: 'small' | 'medium' | 'large';
};

export type ButtonStylesOverrideOptions = {
	root?: string;
	contained?: string;
	outlined?: string;
	primary?: string;
	accent?: string;
	secondary?: string;
	primaryContained?: string;
	primaryOutlined?: string;
	secondaryOutlined?: string;
	secondaryContained?: string;
	accentOutlined?: string;
	accentContained?: string;
	small?: string;
	large?: string;
};
