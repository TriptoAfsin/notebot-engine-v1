const axios = require('axios');
const cheerio = require('cheerio');

const scrapeResults = async (limit = 3) => {
  const END_POINT = 'https://www.butex.edu.bd/results-published/';
  try {
    // Fetch the webpage content
    const response = await axios.get(END_POINT);
    const html = response.data;

    // Load the HTML content into cheerio
    const $ = cheerio.load(html);

    // Find the target elements and extract the data
    const results = [];
    const elements = $('.large-9.columns h3');

    for (let i = 0; i < elements.length && i < limit; i++) {
      const element = elements[i];
      const aTag = $(element).find('a');
      const dateElement = $(element).next('small').find('time');
      
      results.push({
        href: aTag.attr('href'),
        content: aTag.text().trim(),
        date: dateElement.text().trim()
      });
    }

    return results;
  } catch (error) {
    console.error('Error scraping webpage:', error);
    return [];
  }
}

module.exports = scrapeResults;