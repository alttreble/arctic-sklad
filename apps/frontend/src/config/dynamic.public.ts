import { env } from '$env/dynamic/public';
import { cleanEnv, str } from 'envalid';

export default cleanEnv(env, {
	PUBLIC_API_URL: str({
		default: "https://arctic-dev-api.treble.bg"
	})
})
