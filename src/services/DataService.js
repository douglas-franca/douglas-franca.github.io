import apiBackend from "./BaseApi";

const DataService = {
  async getAnswer(question) {
    try {
      const response = await apiBackend.get('/answer', { params: { question } });
      return response.data;
    }
    catch (error) {
      throw new Error('Failed to fetch the answer. Please try again.');
    }
  },
};

export default DataService;