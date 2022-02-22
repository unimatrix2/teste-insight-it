import { Schema, model } from 'mongoose';

const providerSchema = new Schema({
	name: { type: String, required: true },
	officialRegistry: { type: String, required: true },
	cnpj: { type: String, required: true, maxlength: 14 },
	segment: { type: String, required: true },
	address: {
		postalCode: { type: String, required: true },
		street: { type: String, required: true },
		number: { type: String, required: true },
		complement: { type: String },
	},
	telephone: { type: String, required: true },
	email: { type: String, required: true },
});

const Provider = model('Provider', providerSchema);

export default Provider;
