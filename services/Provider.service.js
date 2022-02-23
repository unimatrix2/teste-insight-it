import instance from '../util/axiosInstance';
import registerProviderMapper from '../mappers/registerProviderMapper';
import AppError from '../error/AppError';

export const registerProvider = async (provider, helpers, snack) => {
	try {
		await instance.post(
			'/provider/register',
			registerProviderMapper(provider)
		);
		snack(
			'Fornecedor registrado com sucesso!',
			'success',
			2000
		);
	} catch (error) {
		helpers.setFieldError('cnpj', 'CNPJ já cadastrado');
		snack(
			error.response.data.message,
			'error'
		);
	}
}

export const getProvider = async (provider) => {
	try {
		const { data } = await instance.get(`/provider/${provider}`);
		return data;
	} catch (error) {
		throw new AppError({
			message: error.response.data.message,
			type: error.response.data.type,
			status: error.response.data.status
		});
	}
}

export const getAllProviders = async () => {
	try {
		const { data } = await instance.get('/provider/list');
		return data;
	} catch (error) {
		throw new AppError({
			message: error.response.data.message,
			type: error.response.data.type,
			status: error.response.data.status
		});
	}
}