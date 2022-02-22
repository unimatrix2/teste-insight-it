class AppError extends Error {
	constructor({
		message = 'Ocorreu um erro, tente novamente mais tarde',
		type = 'Erro no servidor',
		status = 500,
	}) {
		super();
		this.message = message;
		this.type = type;
		this.status = status;
	}
}

module.exports = AppError;
