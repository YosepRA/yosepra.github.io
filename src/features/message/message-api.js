import service from '@Services/studioyosepra-inbox/index.js';

const messageAPI = {
  async sendMessage(message) {
    const data = { message };
    const response = await service.inboxClient.post('/message', data);

    return response.data;
  },
};

export default messageAPI;
