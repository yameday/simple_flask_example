from flask import Flask, request, make_response
import json

app = Flask(__name__)

@app.route('/', methods=['POST'])
def index():
     data = request.form['keyword']
     resp = make_response(json.dumps(data))
     resp.status_code = 200
     resp.headers['Access-Control-Allow-Origin'] = '*'
     return resp
if __name__ == "__main__":
    app.run(host="0.0.0.0")