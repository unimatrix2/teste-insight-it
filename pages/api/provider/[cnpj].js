import helmet from 'helmet';
import nc from 'next-connect';
import AppError from '../../../error/AppError';

import { searchProvider } from '../../../repositories/Provider.repository';
import dbConnect from '../../../middleware/db.middleware';

const handler = nc();
handler.use(helmet()).get(async (req, res) => {
	try {
		const provider = await searchProvider(req.query.cnpj);
		return res
			.status(201)
			.json(provider);
	} catch (error) {
		return res.status(error.status).json(new AppError(error));
	}
});

export default dbConnect(handler);
