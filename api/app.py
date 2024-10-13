from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask backend!"

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Implement your login logic here
    return jsonify({"message": "Login successful", "email": email})

if __name__ == '__main__':
    app.run()