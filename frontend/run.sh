rm -rf .env

echo 'REACT_APP_API_URL=http://127.0.0.1:5000' > .env

yarn install
yarn start
