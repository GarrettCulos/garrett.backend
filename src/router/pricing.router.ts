import { Express, Handler } from 'express';
import { controllers } from '../controllers';
import { middleware } from '../middleware';

export function pricingRoutes(basePath: string, app: Express) {
	// app.get( `${basePath}/price`, controllers.pricing.getPrice);
	// app.post( `${basePath}/bulkPrice`, middleware.validateMtgnorthService, controllers.pricing.addPrice);
}
