import { connections, connect } from 'mongoose';

const dbConnect = handler => async (req, res) => {
	if (connections[0].readyState === 1) return handler(req, res);

	await connect(process.env.mongodburl, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return handler(req, res);
};

export default dbConnect;