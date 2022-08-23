import type { Elevation } from '../types';

export default function deriveElevation(elevation: Elevation) {
	switch (elevation) {
		case 'sm':
			return 'shadow-sm';
		case 'default':
			return 'shadow';
		case 'md':
			return 'shadow-md';
		case 'lg':
			return 'shadow-lg';
		case 'xl':
			return 'shadow-xl';
		case '2xl':
			return 'shadow-2xl';
		case 'none':
			return 'shadow-none';
	}
	return '';
}
