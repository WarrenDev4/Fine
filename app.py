from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="frontend/build", static_url_path="")
CORS(app)  # Allow cross-origin requests from React

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!", "status": "success"})

@app.route('/')
def serve_react():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
