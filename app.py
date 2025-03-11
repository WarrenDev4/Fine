from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="fine/build", static_url_path="")
CORS(app) 

@app.route('/')
def serve_react():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
