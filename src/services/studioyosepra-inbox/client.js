import axios from 'axios';

const serverBaseUrl =
  import.meta.env.VITE_STUDIOYOSEPRA_INBOX_BASE_URL || 'http://localhost:3000';

const client = axios.create({
  baseURL: serverBaseUrl,
});

export default client;
