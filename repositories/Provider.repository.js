import AppError from '../error/AppError';
import providerCreateErrorMapper from '../mappers/registerProviderErrorMapper';
import Provider from '../models/Provider.model';

export const insertProvider = async (provider) => {
	try {
		const newProvider = new Provider(provider);
		await newProvider.save();
	} catch (error) {
		// O upperCase não está no mapper pois o mapper é genérico, apenas
		// o campo de CNPJ precisa ser uppercase. Como somente esse campo é
		// indexado na base de dados, apenas nesse pode ocorrer um erro de
		// criação, uma vez que quaisquer inconsistências serão tratadas na
		// validação de dados no formulário
		if (error.keyValue) {
			const errorKey = providerCreateErrorMapper(error);
			throw new AppError({
				message: `${errorKey.toUpperCase()} já existe na base de dados`,
				type: `Provider-Create-${errorKey.toUpperCase()}`,
				status: 400
			});
		}
		throw new AppError({
			message: 'Ocorreu um erro ao criar o fornecedor, tente novamente mais tarde',
			type: 'Provider-Create-Repository',
		});
	}
}

export const searchProvider = async (provider) => {
	try {
		const providerFromDb = await Provider.findOne({ cnpj: provider});
		if (!providerFromDb) throw new AppError({
			message: 'Fornecedor não encontrado!',
			type: 'Provider-Search-Repository',
			status: 404
		})
		return providerFromDb;
	} catch (error) { throw new AppError(error); }
}

export const getAllProviders = async () => {
	try {
		const providers = await Provider.find({});
		if (!providers) throw new AppError({
			message: 'Não há fornecedores cadastrados!',
			type: 'Provider-GetAll-Repository',
			status: 404
		})
		return providers;
	} catch (error) {
		throw new AppError(error);
	}
}