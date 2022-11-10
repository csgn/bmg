rm -f .env

echo "venv is being created..."
virtualenv venv

source ./venv/bin/activate
echo "venv is activated"

echo "requirements.txt is being installed..."
pip install -r requirements.txt
echo "requirements.txt is installed"

echo 'API_URL=https://api.waifu.im' > .env

python app.py

