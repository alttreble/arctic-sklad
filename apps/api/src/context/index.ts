import { PrismaClient } from '@prisma/client';
import { Events } from '@app/services/events';

const prisma = new PrismaClient();
const events = new Events();

export interface Context {
	prisma: PrismaClient;
	events: Events;
}

const context = (): Context => {
	return {
		prisma,
		events
	};
};

export default context;
