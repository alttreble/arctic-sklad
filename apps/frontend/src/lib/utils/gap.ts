export default function getGap(gap: number): string {
	switch (gap) {
		case 0:
			return 'gap-0';
		case 1:
			return 'gap-1';
		case 2:
			return 'gap-2';
		case 3:
			return 'gap-3';
		case 4:
			return 'gap-4';
		case 5:
			return 'gap-5';
		case 6:
			return 'gap-6';
		case 7:
			return 'gap-7';
		case 8:
			return 'gap-8';
		default:
			return 'gap-0';
	}
}
