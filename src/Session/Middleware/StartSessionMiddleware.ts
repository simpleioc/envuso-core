import {config, resolve} from "../../AppContainer";
import {RequestContextContract} from "../../Contracts/Routing/Context/RequestContextContract";
import {SessionManagerContract} from "../../Contracts/Session/SessionManagerContract";
import {Middleware} from "../../Routing/Middleware/Middleware";


export class StartSessionMiddleware extends Middleware {

	public async handle(context: RequestContextContract): Promise<any> {
		const sessionManager = resolve<SessionManagerContract>('SessionManager');
		const session        = sessionManager.driver();
		const cookieName     = config('Session').sessionCookie.name;
		let sessionId        = null;

		if (!context.request.cookieJar().has(cookieName)) {
			console.log('No session cookie on request.');
		} else {
			sessionId = context.request.cookieJar().get(cookieName).getValue() as string;
		}


		context.setSession(await session.create(sessionId));
	}

}
