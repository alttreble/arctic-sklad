import { Item, ItemEntry, NotificationListener } from '@app/types';

export default {
	'id': 1,
	'createdAt': '2022-10-08T14:26:05.262Z',
	'updatedAt': '2022-10-08T14:26:27.990Z',
	'name': 'Алгументин 1000',
	'genericName': 'Амоксициклин',
	'description': 'Антибиотик с удължено освобождаване',
	'uomId': 1,
	'notificationListeners': [
		{
			'id': 1,
			'itemId': 1,
			'type': 'hasExpired',
			'schedule': '0 0 * * *',
			'conditions': [
				{
					'value': '{"value":"6", "type": "months"}',
					'operator': 'TIME_BEFORE',
					'attribute': 'entries.expirationDate'
				}
			],
			'severity': 'ERROR',
			'title': 'Изтекъл срок',
			'description': null
		},
		{
			'type': 'lowQuantity',
			'schedule': null,
			'conditions': [
				{
					'value': '1',
					'operator': 'LTE',
					'attribute': 'totalQuantity'
				}
			],
			'severity': 'WARNING',
			'title': 'Ниско количество',
			'description': null
		} as unknown as NotificationListener
	],
	'uom': {
		'id': 1,
		'name': 'блистер',
		'namePlural': 'блистера'
	},
	'entries': [
		{
			'id': 1,
			'createdAt': '2022-10-09T13:49:56.076Z',
			'updatedAt': '2022-10-09T13:49:56.078Z',
			'expirationDate': '2023-10-09T00:00:00.000Z',
			'quantity': 5
		} as ItemEntry
	],
	'totalQuantity': 5,
	hasExpiredEntry: false
} as Item;
