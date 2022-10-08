import { api } from '.';

export const testProfile = async () => {
	return await api.get('/test').then((res) => {
		return res.data;
	});
};
