const { JWT } = require('google-auth-library');

async function getAccessToken(serviceAccount) {
  const client = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const token = await client.authorize();
  return token.access_token;
}

module.exports = getAccessToken;
