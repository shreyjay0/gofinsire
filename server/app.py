# mock server
from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Finserver</h1>
        <p>Stats test data generator</p>'''

@app.route('/api/v1/stats/generate', methods=['GET'])
def getData():
    arr_size = random.randint(5, 20)
    arr = []
    for i in range(arr_size):
        arr.append(random.randint(1, 1000))
    return jsonify({
        "data": arr}), 201
