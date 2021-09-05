import "reflect-metadata";

import path from "path";
import {config} from 'dotenv';

config({path : path.join(__dirname, '..', '.env')});

import {Config} from "./Meta/Configuration";
import {Envuso} from "./Envuso";
import {Log} from "./Common";


const envuso = new Envuso();

envuso.boot(Config)
	.then(() => envuso.serve())
	.catch(error => {
		Log.error(error);
		console.trace(error);
	});
//envuso.addExceptionHandler(async (exception: Error | Exception, request: FastifyRequest, reply: FastifyReply) => {
//	Log.exception('Server error: ', exception);
//
//	if (!response()?.json) {
//		console.log('response.json not defined??');
//	}
//
//	const data = exception instanceof Exception ? exception.response : {
//		message : exception.toString(),
//		code    : 500,
//	};
//
//	//			return response().negotiated(
//	//				data,
//	//				{
//	//					templatePath : 'Exceptions/exception',
//	//					data         : {
//	//						message:
//	//					}
//	//				}
//	//			);
//	//			return response().json(exception instanceof Exception ? exception.response : exception);
//
//	return response().negotiatedErrorView(
//		data,
//		exception instanceof Exception ? exception.code : 500,
//		exception,
//	);
//});
