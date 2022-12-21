import os
from flask import Flask


app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return "HELLO DOCKER!"


if __name__ == '__main__':
    app.run(host=os.environ.get('APP_HOSTNAME', '0.0.0.0'),
            port=os.environ.get('APP_PORT', '5000'))
