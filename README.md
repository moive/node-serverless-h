# node-serverless-h

This proyect is an edge function

## Installation

1. Clone the repository
2. Clone .env-template to .env
3. Execute command `npm i`
4. Install global netlify `npm install -g netlify-cli`
5. Run the server `npm run netlify:dev`
6. Test the webhook

## create secret token

1. Execute command `node -e "console.log(require('crypto').randomBytes(20).toString('hex'))"`
