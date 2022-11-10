import os
import requests

from flask import Flask, request

from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)


@app.route('/api/random', methods=['GET'])
def api():
    count = request.args.get('count') or 1
    res_list = []

    for _ in range(int(count)):
        res = requests.get(f'{os.environ.get("API_URL")}/random')

        if res.status_code == 200:
            res_list.append(res.json()['images'][0])

    print(res_list)

    return json.dumps(res_list)

if __name__ == "__main__":
    from dotenv import load_dotenv
    load_dotenv()

    app.run()

