export default function getDirection(direction: string): string {
	switch (direction) {
		case 'row':
			return 'flex-row';
		case 'col':
			return 'flex-col';
		case 'row-reverse':
			return 'flex-row-reverse';
		case 'col-reverse':
			return 'flex-col-reverse';
		default:
			return 'flex-col';
	}
}
