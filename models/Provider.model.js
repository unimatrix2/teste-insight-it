import { Schema, model, models } from 'mongoose';

const providerSchema = new Schema({
	name: { type: String, required: true },
	officialRegistry: { type: String, required: true },
	cnpj: { type: String, required: true, maxlength: 14, unique: true },
	segment: { type: String, required: true },
	address: {
		postalCode: { type: String, required: true },
		street: { type: String, required: true },
		number: { type: String, required: true },
		complement: { type: String },
	},
	telephone: { type: String, required: true },
	email: { type: String, required: true },
}, { timestamps: true });

export default models.Provider || model('Provider', providerSchema);
