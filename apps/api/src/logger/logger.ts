import { createLogger, format, transports } from 'winston';
import { LOG_LEVEL } from '@app/env/env';

const logLevels = {
	fatal: 0,
	error: 1,
	warn: 2,
	info: 3,
	debug: 4,
	trace: 5
};

const logger = createLogger({
	levels: logLevels,
	transports: [new transports.Console({
		format:
			format.combine(
				format.colorize(),
				format.printf((info) => {
					if (typeof info.message === 'object') {
						info.message = JSON.stringify(info.message, null, 3)
					}

					return info.message
				})
			),
		level: LOG_LEVEL
	})]
});

export default logger;
