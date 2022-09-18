import { env } from '$env/dynamic/public';
import { cleanEnv, str } from 'envalid';

export default cleanEnv(env, {
	PUBLIC_API_URL: str({
		default: "http://localhost:4000"
	})
})
