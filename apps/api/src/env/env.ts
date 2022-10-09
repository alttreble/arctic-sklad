import {str, cleanEnv} from "envalid"

const env = cleanEnv(process.env, {
	LOG_LEVEL: str({choices: ["debug", "info"], default: "info"})
})

export const LOG_LEVEL = env.LOG_LEVEL
