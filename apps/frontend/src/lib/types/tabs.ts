import type { ComponentOptions, ElementOptions } from './index';

/* Tab Group */
export type TabGroupOptions = ElementOptions & {
	defaultProps?: TabGroupPropsOptions;
	styleOverrides?: any;
};

export type TabGroupProps = ElementOptions & {
	defaultIndex?: number;
	/** Whether the orientation of the `TabList` is vertical instead of horizontal */
	vertical?: boolean;
	/**
	 * Whether, in keyboard navigation, the Enter or Space key is necessary to change tabs.
	 * By default, the arrow keys will change tabs automatically without hitting Enter/Space.
	 * This has no impact on mouse behavior
	 */
	manual?: boolean;
};

export type TabGroupPropsOptions = ElementOptions & {
	defaultIndex?: number;
	vertical?: boolean;
	manual?: boolean;
};

/* Tab List */
export type TabListOptions = ComponentOptions<TabListPropsOptions, object>;

export type TabListPropsOptions = ElementOptions;

export type TabListProps = ElementOptions;

/* Tab */
export type TabOptions = ComponentOptions<TabPropsOptions, any>;

export type TabPropsOptions = ElementOptions & {
	disabled?: boolean;
};

export type TabProps = ElementOptions & {
	disabled?: boolean;
};

/* Tab Panels */
export type TabPanelsOptions = ComponentOptions<TabPanelsPropsOptions, any>;

export type TabPanelsPropsOptions = ElementOptions;

export type TabPanelsProps = ElementOptions;

/* Tab Panel */
export type TabPanelOptions = ComponentOptions<TabPanelPropsOptions, any>;

export type TabPanelPropsOptions = ElementOptions;

export type TabPanelProps = ElementOptions;
