class APIService {
  constructor() {
    this.baseUrl = 'localhost:8000';
  }

  async get(uri) {
    try {
      const response = await fetch(`${this.baseUrl}${uri}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      console.warn('Error', error); // eslint-disable-line no-console
      return { error };
    }
  }
}

export default APIService;
