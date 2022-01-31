import fetch from 'node-fetch';

require('dotenv').config()
const { STORE_URL, TOKEN } = process.env

const API_ENDPOINT = 'https://punitastore.myshopify.com/admin/api/2021-10/orders.json';

exports.handler = async (event, context) => {
  try {
    console.log(STORE_URL, TOKEN);
    const response = await fetch(API_ENDPOINT, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': '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',
        },
      });
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
