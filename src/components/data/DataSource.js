import axios from 'axios';

import { handlePromise } from '../../utils/helpers.js';

const { VITE_API_ENDPOINT } = import.meta.env;

async function sendRequest(method, url, data, errorHandler, options = {}) {
  const requestPromise = axios.request({ method, url, data, ...options });
  const [result, error] = await handlePromise(requestPromise);

  if (error) return errorHandler(error);

  return result.data;
}

async function postData(url, data, errorHandler) {
  const result = await sendRequest('POST', url, data, errorHandler);

  return result;
}

export { VITE_API_ENDPOINT, postData };
