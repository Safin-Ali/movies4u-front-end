import axios from 'axios';

export const apiAxiosIns = axios.create({
	baseURL:process.env.MOVIES4U_SERVER_API,
});