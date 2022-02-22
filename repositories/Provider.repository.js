import AppError from '../error/AppError';
import Provider from '../models/Provider.model';

export const insertProvider = async (provider) => {
	try {
		const newProvider = new Provider(provider);
		await newProvider.save();
	} catch (error) {
		throw new AppError({
			message: 'Ocorreu um erro ao criar o fornecedor, tente novamente mais tarde',
			type: 'insertProvider-Repo',
			status: 500
		});
	}
}