import { PrismaClient } from '@prisma/client';
import { Events } from '@app/services/events';
import { DeepMockProxy, mockDeep } from 'vitest-mock-extended';

export type MockContext = {
	prisma: DeepMockProxy<PrismaClient>
	events: DeepMockProxy<Events>
}

const mockContext: MockContext = {
	prisma: mockDeep<PrismaClient>(),
	events: mockDeep<Events>()
};

export default mockContext;
