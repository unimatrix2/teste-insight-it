import helmet from 'helmet';
import nc from 'next-connect';
import AppError from '../../../error/AppError';

import { insertProvider } from '../../../repositories/Provider.repository';
import dbConnect from '../../../middleware/db.middleware';

const handler = nc();
handler.use(helmet()).post(async (req, res) => {
	try {
		console.log(req.body)
		await insertProvider(req.body);
		res.status(201).json({ message: 'Fornecedor cadastrado com sucesso!' });
	} catch (error) {
		res.status(error.status).json(new AppError(error));
	}
});

export default dbConnect(handler);