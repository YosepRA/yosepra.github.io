import axios from 'axios';

import { handlePromise } from '../../utils/helpers';

// axios.defaults.headers.authorization =

const { VITE_API_ENDPOINT } = import.meta.env;

class DataSource {
  constructor(errorHandler = () => {}) {
    this.errorHandler = errorHandler;
  }

  async postData(url, data) {
    const ajaxPromise = axios.post(url, data);
    const [result, error] = await handlePromise(ajaxPromise);

    if (error) return this.errorHandler(error);

    return result.data;
  }
}

export { VITE_API_ENDPOINT };

export default DataSource;
