import instance from '../util/axiosInstance';
import registerProviderMapper from '../mappers/registerProviderMapper';

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
		console.log(error.response)
	}
}