const axios = require('axios');

const texGPTSearch = async (query) => {
  console.log(`🟠 TexGPTSearch : Query is ${query}`);
  const API_ENDPOINT = 'https://api.cloudflare.com/client/v4/accounts/4e38392b49ae108574f34eed09e2427b/autorag/rags/tex-gpt-new/ai-search';
  const API_TOKEN = process.env.AUTO_RAG_TOKEN;

  if (!API_TOKEN) {
    throw new Error('CLOUDFLARE_API_TOKEN environment variable is required');
  }

  if (!query) {
    throw new Error('Query parameter is required');
  }

  try {
    const response = await axios.post(API_ENDPOINT, 
      {
        query: query
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('TexGPT Error making API request:', error);
    throw error;
  }
}

module.exports = texGPTSearch;