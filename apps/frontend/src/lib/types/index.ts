import type { ContainerOptions } from './container';
import type { SupportedElement } from '../utils/elements';
import type { DividerOptions } from './divider';
import type { TypographyOptions } from './typography';
import type { ButtonOptions } from './button';
import type { DrawerOptions } from './drawer';
import type {
	CardActionOptions,
	CardContentOptions,
	CardHeaderOptions,
	CardOptions,
	CardTitleOptions
} from './card';
import type {
	TabGroupOptions,
	TabListOptions,
	TabOptions,
	TabPanelOptions,
	TabPanelsOptions
} from './tabs';
import type { PaperOptions } from './paper';
import type { BaseInputOptions, FilledInputOptions, OutlinedInputOptions } from './input';
import type { FormControlOptions, FormLabelOptions } from './form';
import type { InputStartAdornmentOptions } from './adornment';
import type { StackOptions } from './stack';
import type { ListItemOptions, ListOptions } from './list';

export type ThemeOptions = {
	components?: {
		BaseInput?: BaseInputOptions;
		Button?: ButtonOptions;
		Card?: CardOptions;
		CardAction?: CardActionOptions;
		CardContent?: CardContentOptions;
		CardHeader?: CardHeaderOptions;
		CardTitle?: CardTitleOptions;
		Container?: ContainerOptions;
		Divider?: DividerOptions;
		Drawer?: DrawerOptions;
		FilledInput?: FilledInputOptions;
		OutlinedInput?: OutlinedInputOptions;
		FormLabel?: FormLabelOptions;
		FormControl?: FormControlOptions;
		InputStartAdornment?: InputStartAdornmentOptions;
		List?: ListOptions;
		ListItem?: ListItemOptions;
		Paper?: PaperOptions;
		Stack?: StackOptions;
		TabGroup?: TabGroupOptions;
		TabList?: TabListOptions;
		Tab?: TabOptions;
		TabPanels?: TabPanelsOptions;
		TabPanel?: TabPanelOptions;
		Typography?: TypographyOptions;
	};
};

export type ComponentOptions<P, O> = {
	defaultProps?: P;
	styleOverrides?: O;
};

export type ElementOptions = {
	element?: SupportedElement;
};

export type Elevation = 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl';

export * from './adornment';
export * from './button';
export * from './card';
export * from './container';
export * from './divider';
export * from './drawer';
export * from './form';
export * from './input';
export * from './list';
export * from './paper';
export * from './stack';
export * from './tabs';
export * from './typography';
