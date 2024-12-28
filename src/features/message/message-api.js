import service from '@Services/studioyosepra-inbox/index.js';
console.log('🚀 ~ service:', service);

const messageAPI = {
  async sendMessage(message) {
    const data = { message };
    const response = await service.inboxClient.post('/message', data);

    return response.data;
  },
};

export default messageAPI;
