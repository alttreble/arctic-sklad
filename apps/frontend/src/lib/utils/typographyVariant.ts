export default function typographyVariant(variant: string) {
	switch (variant) {
		case 'h1':
			return 'text-6xl font-bold';
		case 'h2':
			return 'text-5xl font-bold';
		case 'h3':
			return 'text-4xl font-bold';
		case 'h4':
			return 'text-3xl font-bold';
		case 'h5':
			return 'text-2xl font-bold';
		case 'h6':
			return 'text-xl font-bold';
		case 'subtitle1':
			return 'text-lg text-accent-600';
		case 'subtitle2':
			return 'text-xs font-bold text-accent-600 uppercase';
		case 'body1':
			return 'text-md';
		case 'body2':
			return 'text-sm';
		case 'caption':
			return 'text-sm text-gray-600';
		default:
			return '';
	}
}
