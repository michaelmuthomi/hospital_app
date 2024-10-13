from flask import Flask
from routes.login import login  # Import the blueprint correctly

app = Flask(__name__)

# Register the blueprint
app.register_blueprint(login)

@app.route("/")
def index():
    return "Homepage of GeeksForGeeks"

if __name__ == "__main__":
    app.run(debug=True)