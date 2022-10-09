import { vi } from 'vitest';
import runNotificationCheck, { TimeBeforeValue } from '@app/services/notification/runNotificationCheck';
import mockContext from '@app/test/mockContext';
import item from '@app/test/fixtures/item';

vi.mock('@app/services/item/item', () => {
	return {
		default: () => (item)
	};
});

describe('Notification Check', () => {
	beforeEach(() => {
		// tell vitest we use mocked time
		vi.useFakeTimers();
		vi.resetAllMocks();
	});

	it('should create notification because item has entry with expired date', async () => {
		// Mocked item has one entry that expires on 2023-10-09T00:00:00.000Z
		// To pass the test, we set the current date after this expiration date
		const date = new Date('2023-10-10T00:00:00.000Z');
		vi.setSystemTime(date);

		const listener = {
			'id': 1,
			'itemId': 1,
			'type': 'hasExpired',
			'schedule': '0 0 * * *',
			'conditions': [
				{
					'value': JSON.stringify({ 'value': 0, 'type': 'months' } as TimeBeforeValue),
					'operator': 'TIME_BEFORE',
					'attribute': 'entries.expirationDate'
				}
			],
			'severity': 'ERROR',
			'title': 'Изтекъл срок',
			'description': null
		};

		await runNotificationCheck(mockContext, listener);

		expect(mockContext.prisma.notification.upsert).toHaveBeenCalledOnce();
	});

	it('should NOT create notification because item has no entries with expired date', async () => {
		const date = new Date('2023-10-08T00:00:00.000Z');
		vi.setSystemTime(date);

		const listener = {
			'id': 1,
			'itemId': 1,
			'type': 'hasExpired',
			'schedule': '0 0 * * *',
			'conditions': [
				{
					'value': JSON.stringify({ 'value': 0, 'type': 'months' } as TimeBeforeValue),
					'operator': 'TIME_BEFORE',
					'attribute': 'entries.expirationDate'
				}
			],
			'severity': 'ERROR',
			'title': 'Изтекъл срок',
			'description': null
		};

		await runNotificationCheck(mockContext, listener);

		expect(mockContext.prisma.notification.upsert).not.toHaveBeenCalled();
	});

	it('should create notification because item will be expired for next expedition', async () => {
		const listener = {
			'id': 1,
			'itemId': 1,
			'type': 'expiredForNextExpedition',
			'schedule': '0 0 * * *',
			'conditions': [
				{
					value: JSON.stringify({
						value: 0,
						type: 'months',
						date: new Date(2023, 0).toISOString()
					} as TimeBeforeValue),
					'operator': 'TIME_BEFORE',
					'attribute': 'entries.expirationDate'
				}
			],
			'severity': 'ERROR',
			'title': 'Изтекъл срок',
			'description': null
		};

		await runNotificationCheck(mockContext, listener);

		expect(mockContext.prisma.notification.upsert).not.toHaveBeenCalled();
	});
});
