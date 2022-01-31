import fetch from 'node-fetch';

require('dotenv').config()
const { STORE_URL, TOKEN } = process.env

const API_ENDPOINT = `${STORE_URL}/admin/api/2021-10/orders.json`;

exports.handler = async (event, context) => {
  try {
    console.log(STORE_URL, TOKEN);
    const response = await fetch(API_ENDPOINT, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Shopify-Access-Token': `${TOKEN}`,
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
